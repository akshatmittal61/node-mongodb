import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
// export const dbUri = process.env.DB_URI;
export const db = {
    uri: process.env.DB_URI,
    name: process.env.DB_NAME,
}