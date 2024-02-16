import { Router } from "express";
import { githubControllers } from "../controllers/index.js";

const router = Router();

router.route("/").get(githubControllers.getProfileByUsername);
router.route("/count").get(githubControllers.getCount);
router.route("/usernames").get(githubControllers.getUsernames);

export default router;
