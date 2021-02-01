import { Db, MongoClient, Collection } from 'mongodb';
import { Index } from '../enums/collection.enum';
import logger from '../util/winston.createLogger';
import { dbOptionsType } from './dbOptionsType';

export class DB {
  static async getConnection(dbURI: string, dbOptions: dbOptionsType) {
    const client = new MongoClient(dbURI, dbOptions);
    try {
      await client.connect();
      const database: Db = client.db(Index.Db);
      const collection = database.collection(Index.Users);
      return collection;
    } catch (e) {
      logger.error(`Get connection`, { message: `No connection ${e}` });
    }
  }
}
