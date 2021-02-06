import { config } from 'dotenv';
import { ObjectID } from 'mongodb';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { dbOptionsType, ProcessEnv } from '../../db/dbOptionsType';
import { User } from '../../models/user';
import { Options } from '../../controllers/interface.Controller';
import { ApiError } from '../../error/ErrorHandler';
import constants from '../../config/constants';

import { Database } from '../../db/db.client';

config();
const { dbURI, secret } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export class UserService {
  static async findOne(doc: User): Promise<any> {
    const { email, password } = doc;
    const collection: any = await Database.connect(dbURI, dbOptions);
    const user = await collection.findOne({ email });
    const match = user && (await compare(password, user.password));
    if (!match) throw new ApiError(constants.errorTypes.notFound);

    return {
      accessToken: sign(
        {
          data: {
            id: new ObjectID(user._id),
          },
        },
        `${secret}`
      ),
    };
  }
  static async showUser(doc: any, options: Options): Promise<any> {
    const userID: ObjectID = new ObjectID(doc);
    const collection: any = await Database.connect(dbURI, dbOptions);
    if (!collection) throw new ApiError(constants.errorTypes.notFound);
    return await collection.findOne({ _id: userID }, options);
  }
}
