import { Db } from "mongodb";

import { getDb } from "../db/db.client";
import { Collection } from "../enums/collection.enum";
import { Property } from "../models/property";

export class PropertyRepository {
    private db: Db = getDb()

    public async saveProperty(property: Property) {
        await this.db.collection(Collection.Properties).insertOne(property);
    }
}