require('dotenv').config();
import { MongoClient, Collection } from 'mongodb';
import { dbOptionsType, ProcessEnv } from './dbOptionsType';

const { dbURI } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewdbURIParser: true,
};

class DB {
  static async getConnection(dbURI: string, dbOptions: dbOptionsType) {
    const client = new MongoClient(dbURI, dbOptions);
    try {
      await client.connect();
      const database = client.db('users');

      const collection = database.collection('profile');
      return { collection, client };
    } catch (e) {
      console.error(e);
    }
  }
}

class Methods {
  static async insertOneDoc(doc: any) {
    const { collection, client } = await DB.getConnection(dbURI, dbOptions);
    try {
      return await collection.insertOne(doc);
    } catch (e) {
      console.error(`Insert One Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async insertManyDoc(doc: any) {
    const { collection, client } = await DB.getConnection(dbURI, dbOptions);
    try {
      return await collection.insertMany(doc);
    } catch (e) {
      console.error(`Insert Many Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findOneDoc(doc: any) {
    const { collection, client } = await DB.getConnection(dbURI, dbOptions);
    try {
      return await collection.findOne(doc);
    } catch (e) {
      console.error(`Find One  Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findAllDoc(doc: any) {
    const { collection, client } = await DB.getConnection(dbURI, dbOptions);
    try {
      return await collection.find(doc).toArray();
    } catch (e) {
      console.error(`Find All Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findOneDocAndUpdate(filter: any, updateDoc: any) {
    const { collection, client } = await DB.getConnection(dbURI, dbOptions);
    try {
      return await collection.findOneAndUpdate(filter, updateDoc);
    } catch (e) {
      console.error(`Find All Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async deletOneDoc(query: any) {
    const { collection, client } = await DB.getConnection(dbURI, dbOptions);
    try {
      return await collection.deleteOne(query);
    } catch (e) {
      console.error(`Find All Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }
}

export { Methods };
