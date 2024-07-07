import { Repository } from "typeorm";
import { SportEvent } from "@/core/models/SportEvent";
import { ResponseStatus, ServiceResponse } from '@/utils/serviceResponse';

export type SportEventResponse = {
    status: ResponseStatus;
    message?: string;
    data: SportEvent[] | null;
};

export class FetchSportEvents {
  constructor(private sportEventRepository: Repository<SportEvent>) {}

  async execute(): Promise<SportEventResponse> {
    try {
        const sportEvents = await this.sportEventRepository.find();
        return {
            status: ResponseStatus.Success,
            data: sportEvents
        };
    } catch (error) {
        return {
            status: ResponseStatus.Failed,
            data: null
        }
    }
  }
}