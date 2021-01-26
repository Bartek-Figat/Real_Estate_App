require('dotenv').config();
const { MongoClient, Db } = require('mongodb');
import logger from '../util/winston.createLogger';
import { dbOptionsType, ProcessEnv } from './dbOptionsType';

const { dbURI } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const client = new MongoClient(dbURI, dbOptions);

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db('test');
  return { db, client };
}

// export = async (): Promise<void> => {
//   try {
//     await client.connect();
//     await client.db('admin').command({ ping: 1 });
//     logger.info(`DB connection`, { message: `Connected successfully to Client DB` });
//   } finally {
//     await client.close();
//   }
// };

export default connect;
