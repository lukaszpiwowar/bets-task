import { AppDataSource } from "@/database/data-source";
import { SportEvent } from "@/core/models/SportEvent";

export const sportEventRepository = AppDataSource.getRepository(SportEvent);
