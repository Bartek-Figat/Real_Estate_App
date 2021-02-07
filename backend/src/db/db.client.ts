import { config } from 'dotenv';
import { Db, MongoClient, MongoClientOptions } from 'mongodb';
import { Collection } from 'typescript';
import { Index } from '../enums/collection.enum';
import { dbOptionsType, ProcessEnv } from './dbOptionsType';

export class Database {
  public static async connect(
    dbURI: string,
    dbOptions: MongoClientOptions | undefined
  ): Promise<any> {
    const client: MongoClient = new MongoClient(dbURI, dbOptions);
    await client.connect();
    const collection = client.db(Index.Db).collection(Index.Users);
    return { collection, client };
  }
}
