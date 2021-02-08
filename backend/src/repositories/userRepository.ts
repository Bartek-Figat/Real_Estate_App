import { config } from 'dotenv';
import constants from '../config/constants';
import { Database } from '../db/db.client';
import { dbOptionsType, ProcessEnv } from '../db/dbOptionsType';
import { ApiError } from '../error/ErrorHandler';
import { User } from '../models/user';

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
      throw new ApiError(constants.errorTypes.db);
    } finally {
      await client.close();
    }
  }

  public async saveUser(user: User): Promise<any> {
    const { collection, client } = await this.db.connect(dbURI, dbOptions);
    try {
      return await collection.insertOne(user);
    } catch (e) {
      throw new ApiError(constants.errorTypes.db);
    } finally {
      await client.close();
    }
  }
}
