import { env } from "@repo/config/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",
    datasource: {
        url: env.database.connectionString,
    },
    migrations: {
        path: "migrations",
    },
});