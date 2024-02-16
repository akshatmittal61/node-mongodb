import { MongoClient } from "mongodb";
import { dbUri } from "../config/index.js";

const client = new MongoClient(dbUri);

export default client;
