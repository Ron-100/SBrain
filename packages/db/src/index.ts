import { env } from "@repo/config/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: env.database.connectionString });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
export * from "../generated/prisma/client";