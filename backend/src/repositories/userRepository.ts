import { Db } from "mongodb";

import { getDb } from "../db/db.client";
import { Collection } from "../enums/collection.enum";
import { User } from "../models/user";

export class UserRepository {
  private db: Db = getDb()

  public async saveUser(user: User) {
    await this.db.collection(Collection.Users).insertOne(user);
  }

  public async findOne(user: User): Promise<any> {
    return await this.db.collection(Collection.Users).findOne(user) as User | undefined;
  }
}