import { config } from 'dotenv'
import { Db, MongoClient } from 'mongodb';
import logger from '../util/winston.createLogger';
import { dbOptionsType, ProcessEnv } from './dbOptionsType';

config()
const { dbURI } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewdbURIParser: true,
  useNewUrlParser: true,
};

let db: Db;
const client: MongoClient = new MongoClient(dbURI, dbOptions);

export const mongoConnect =  async (): Promise<void> => {
  try {
    db = await client.db('test')
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    logger.info(`DB connection`, { message: `Connected successfully to Client DB` });
  } finally {
    await client.close();
  }
};

export const getDb = (): Db => {
  if (db) {
    return db
  }

  throw Error('No database found')
}
