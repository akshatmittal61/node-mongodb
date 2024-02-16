import express from "express";
import { PORT } from "./config/index.js";

const app = express();

app.get("/", (req, res) => {
	return res.status(200).json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}!`);
});
