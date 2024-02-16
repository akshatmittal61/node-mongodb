import { Router } from "express";
import { leetcodeControllers } from "../controllers/index.js";

const router = Router();

router.route("/").get(leetcodeControllers.getProfileByUsername);
router.route("/count").get(leetcodeControllers.getCount);
router.route("/usernames").get(leetcodeControllers.getUsernames);

export default router;