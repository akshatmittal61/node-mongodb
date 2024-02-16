import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const dbUri = process.env.DB_URI;