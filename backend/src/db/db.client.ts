require("dotenv").config();
const { MongoClient } = require("mongodb");
import logger from '../util/winston.createLogger'
import { dbOptionsType, ProcessEnv } from './dbOptionsType';

const { dbURI } =  process.env as ProcessEnv


const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const client: any = new MongoClient(dbURI, dbOptions);

export = async (): Promise<void> => {
 try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    logger.info(`DB connection`, {message: `Connected successfully to Client DB`} );
  } finally {
    await client.close();
  }
}
