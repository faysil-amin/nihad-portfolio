import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.DB_URL);

export const connect = (collection) => {
    const database = process.env.DB_NAME;
    return client.db(database).collection(collection)
}