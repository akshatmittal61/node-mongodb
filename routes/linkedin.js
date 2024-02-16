import { Router } from "express";
import { linkedinControllers } from "../controllers/index.js";

const router = Router();

router.route("/").get(linkedinControllers.getProfileByUsername);
router.route("/count").get(linkedinControllers.getCount);
router.route("/usernames").get(linkedinControllers.getUsernames);

export default router;
