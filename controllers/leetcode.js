import globalDb from "../db/index.js";

const collectionName = "userLeetcodeStats";

export const getProfileByUsername = async (req, res) => {
	const username = req.query.username;
	const allUsers = await globalDb
		.getCollection(collectionName)
		.findOne({ leetcodeUsername: username })
		.catch((err) => {
			console.error(err);
		});
	return res.status(200).json({ message: "Success", data: allUsers });
};

export const getCount = async (req, res) => {
	const count = await globalDb
		.getCollection(collectionName)
		.countDocuments();
	return res.status(200).json({ message: "Success", data: count });
};

export const getUsernames = async (req, res) => {
	const usernames = await globalDb
		.getCollection(collectionName)
		.find()
		.project({ leetcodeUsername: 1, _id: 0 })
		.toArray();
	return res.status(200).json({
		message: "Success",
		data: usernames.map((user) => user.leetcodeUsername),
	});
};
