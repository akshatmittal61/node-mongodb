import express from "express";
import { PORT } from "./config/index.js";
import globalDb from "./db/index.js";

const app = express();
const db = globalDb.db;

app.get("/", async (req, res) => {
    // use pagination, get 10 users at a time
	const allUsers = await globalDb.getCollection("userLeetcodeStats").find({}).limit(10).toArray();
	return res.status(200).json({ message: "Success", data: allUsers });
});

app.listen(PORT, async () => {
	await globalDb.connect();
	console.log(`Server is running on port ${PORT}`);
});
