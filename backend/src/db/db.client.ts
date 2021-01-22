require("dotenv").config();
const { MongoClient } = require("mongodb");
import logger from '../util/winston.createLogger'


const { dbURI } =  process.env as {
    [key: string]: string;
  };



interface dbOptionsType {
    useUnifiedTopology: boolean;
    useNewUrlParser: boolean;
}

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const client = new MongoClient(dbURI, dbOptions);

module.exports = async (): Promise<any> => {
 try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    logger.info(`DB connection`, {message: `Connected successfully to Client DB`} );
  } finally {
    await client.close();
  }
}
