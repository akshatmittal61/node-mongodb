import express from "express";
import { PORT } from "./config/index.js";
import globalDb from "./db/index.js";
import routes from "./routes/index.js";

const app = express();
const db = globalDb.db;

/* app.get("/", async (req, res) => {
	const username = req.query.username;
	const allUsers = await globalDb
		.getCollection("userLeetcodeStats")
		.findOne({ leetcodeUsername: username })
        .catch((err) => {
            console.error(err);
        });
	return res.status(200).json({ message: "Success", data: allUsers });
});

app.get("/count", async (req, res) => {
	const count = await globalDb
		.getCollection("userLeetcodeStats")
		.countDocuments();
	return res.status(200).json({ message: "Success", data: count });
});

app.get("/usernames", async (req, res) => {
	const usernames = await globalDb
		.getCollection("userLeetcodeStats")
		.find()
		.project({ leetcodeUsername: 1, _id: 0 })
		.toArray();
	return res
		.status(200)
		.json({
			message: "Success",
			data: usernames.map((user) => user.leetcodeUsername),
		});
}); */

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, async () => {
	await globalDb.connect();
	console.log(`Server is running on port ${PORT}`);
});
