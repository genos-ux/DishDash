import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { ENV } from "./env.JS";
import * as schemas from "../db/schema.js"


const sql = neon(ENV.DATABASE_URL);

export const db = drizzle(sql, { schema})