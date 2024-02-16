import { MongoClient } from "mongodb";
import { db } from "../config/index.js";

const client = new MongoClient(db.uri);

class DbManager {
	constructor() {
		this.db = null;
	}

	getDb() {
		return this.db;
	}

	async connect() {
		try {
			await client.connect();
			console.log("Connected to the database");
			this.db = client.db(db.name);
		} catch (error) {
			console.log(error);
			process.exit(1);
		}
	}

    getCollection(collectionName) {
        return this.db.collection(collectionName);
    }
}

var globalDb = new DbManager();

export default globalDb;
