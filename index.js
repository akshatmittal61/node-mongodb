import express from "express";
import { PORT } from "./config/index.js";
import client from "./db/index.js";

const app = express();

app.get("/", (req, res) => {
	return res.status(200).json({ message: "Hello, world!" });
});

app.listen(PORT, async () => {
	await client
		.connect()
		.then(() => {
			console.log(`Server is running on port ${PORT}`);
			console.log("Connected to the database");
		})
		.catch((err) => {
			console.log(err);
			process.exit(1);
		});
});
