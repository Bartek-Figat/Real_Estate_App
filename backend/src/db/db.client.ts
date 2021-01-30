import { config } from 'dotenv';
import { Db, MongoClient } from 'mongodb';
import { Collection, Client } from '../enums/collection.enum';
import logger from '../util/winston.createLogger';
import { dbOptionsType, ProcessEnv } from './dbOptionsType';

config();
const { dbURI } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export class DB {
  static async getConnection(dbURI: string, dbOptions: dbOptionsType) {
    const client = new MongoClient(dbURI, dbOptions);
    try {
      await client.connect();
      const database = client.db(Client.Db);
      const collection = database.collection(Collection.Users);
      return collection;
    } catch (e) {
      logger.error(`Get connection`, { message: `No connection ${e}` });
    }
  }
}

class DbClient {
  public db!: Db;

  public connect() {
    /* ... */
  }
}

export default new DbClient();
