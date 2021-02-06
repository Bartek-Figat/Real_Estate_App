import { Db, MongoClient } from 'mongodb';
import { Index } from '../enums/collection.enum';
import { Logger } from '../util/winston.createLogger';
import { dbOptionsType } from './dbOptionsType';

export class Database {
  static async connect(dbURI: string, dbOptions: dbOptionsType) {
    const client = new MongoClient(dbURI, dbOptions);
    try {
      await client.connect();
      const database: Db = client.db(Index.Db);
      const collection = database.collection(Index.Users);
      return collection;
    } catch (e) {
      Logger.error(`Get connection: ${e}`);
    }
  }
}
