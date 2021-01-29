import { config } from 'dotenv';
import { Db, MongoClient } from 'mongodb';
import { Collection, Client } from 'enums/collection.enum';
import logger from 'util/winston.createLogger';
import { dbOptionsType, ProcessEnv } from './dbOptionsType';

config();
const { dbURI } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let db: Db;
const client: MongoClient = new MongoClient(dbURI, dbOptions);

export const mongoConnect = async (): Promise<void> => {
  try {
    await client.connect();
    db = await client.db('test');
    await client.db('admin').command({ ping: 1 });
    logger.info(`DB connection`, { message: `Connected successfully to Client DB` });
  } finally {
    // client.close()
  }
};

export const getDb = (): Db => {
  if (db) {
    return db;
  }

  throw new Error('No database found');
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
