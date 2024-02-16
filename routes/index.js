import { Router } from "express";
import githubRoutes from "./github.js";
import leetcodeRoutes from "./leetcode.js";

const router = Router();

router.use("/github", githubRoutes);
router.use("/leetcode", leetcodeRoutes);

export default router;
