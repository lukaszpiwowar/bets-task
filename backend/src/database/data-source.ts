import { DataSource } from "typeorm";
import { env } from "@/utils/envConfig";
import { SportEvent } from "@/core/models/SportEvent";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DB,
    synchronize: false,
    migrationsRun: true,
    logging: true,
    entities: [SportEvent],
    subscribers: [],
    migrations: ['src/database/migrations/*.ts'],
});
