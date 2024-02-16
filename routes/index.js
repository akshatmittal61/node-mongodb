import leetcodeRoutes from "./leetcode.js";
import { Router } from "express";

const router = Router();

router.use("/leetcode", leetcodeRoutes);

export default router;
