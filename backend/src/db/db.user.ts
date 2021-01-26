require('dotenv').config();
import { MongoClient } from 'mongodb';
import { dbOptionsType, ProcessEnv } from './dbOptionsType';

const { dbURI } = process.env as ProcessEnv;

const dbOptions: dbOptionsType = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const insertOne = async (doc: any) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('new_collection');
    return await collection.insertOne(doc);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const insertMany = async (docs: any) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('new_collection');
    return await collection.insertMany(docs);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const findOne = async (query: any) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('new_collection');
    return await collection.findOne(query);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const find = async (query: any) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('new_collection');
    return collection.find(query).toArray();
  } catch (error) {
    console.log(error);
  }
};

const findOneAndUpdate = async (filter: any, options: any, updateDoc: any) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('new_collection');
    return await collection.findOneAndUpdate(filter, options, updateDoc);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const updateOne = async (filter: any, updateDoc: any) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('new_collection');
    return await collection.updateOne(filter, updateDoc);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const deleteOne = async (quer: any) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('new_collection');
    return await collection.deleteOne(quer);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const deleteMany = async (query: any) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('new_collection');
    return await collection.deleteMany(query);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

export const get = async () => {
  const res = await find({});
  console.log(res);
};

export { insertOne, insertMany, findOne, find, findOneAndUpdate, updateOne, deleteOne, deleteMany };
