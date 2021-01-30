import { Db, ObjectID } from 'mongodb';
import { config } from 'dotenv';
import { sign } from 'jsonwebtoken';
import { compare, genSalt, hash } from 'bcrypt';
import { dbOptionsType, ProcessEnv } from '../../db/dbOptionsType';
import DbClient, { DB } from '../../db/db.client';
import { getMaxListeners } from 'process';

config();
const { dbURI, secret } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export class Method {
  static async findOne(doc: any) {
    const { email, password } = doc;
    const collection: any = await DB.getConnection(dbURI, dbOptions);
    const existingUser = await collection.findOne({ email });
    const match = existingUser && (await compare(password, existingUser.password));
    if (!match) {
      return;
    }

    return {
      accessToken: sign(
        {
          data: {
            id: new ObjectID(existingUser._id),
          },
        },
        `${secret}`
      ),
    };
  }
}
