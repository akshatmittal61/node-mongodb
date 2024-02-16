import { Router } from "express";
import githubRoutes from "./github.js";
import leetcodeRoutes from "./leetcode.js";
import linkedinRoutes from "./linkedin.js";

const router = Router();

router.use("/github", githubRoutes);
router.use("/leetcode", leetcodeRoutes);
router.use("/linkedin", linkedinRoutes);

export default router;
