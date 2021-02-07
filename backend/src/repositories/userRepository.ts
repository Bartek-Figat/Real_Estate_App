import { config } from 'dotenv';
import constants from '../config/constants';
import { Database } from '../db/db.client';
import { dbOptionsType, ProcessEnv } from '../db/dbOptionsType';
import { ApiError } from '../error/ErrorHandler';
import { User } from '../models/user';
import { Logger } from '../util/winston.createLogger';

config();
const { dbURI } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export class UserRepository {
  db = Database;
  public async findOne(user: any): Promise<any> {
    const { collection, client } = await this.db.connect(dbURI, dbOptions);
    try {
      return await collection.findOne(user);
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }

  public async saveUser(user: User): Promise<any> {
    const { collection, client } = await this.db.connect(dbURI, dbOptions);
    try {
      return await collection.insertOne(user);
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
}
