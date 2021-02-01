import { ObjectID } from 'mongodb';
import { config } from 'dotenv';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { dbOptionsType, ProcessEnv } from '../../db/dbOptionsType';
import { DB } from '../../db/db.client';
import { User } from '../../models/user';

config();
const { dbURI, secret } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export class Method {
  static async findOne(doc: User): Promise<any> {
    const { email, password } = doc;
    const collection: any = await DB.getConnection(dbURI, dbOptions);
    const user = await collection.findOne({ email });
    const match = user && (await compare(password, user.password));
    if (!match) {
      return;
    }

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
}
