import express, { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseStatus, ServiceResponse } from '@/utils/serviceResponse';
import { handleServiceResponse } from '@/utils/httpHandlers';

import { sportEventRepository } from '@/database/repositories/sportEvent.repository';
import { FetchSportEvents } from '@/core/use-cases/fetchSportEvents';


export const sportEventRouter: Router = (() => {
  const router = express.Router();

  router.get('/', async (_req: Request, res: Response) => {
    
    const fetchSportEvents = new FetchSportEvents(sportEventRepository);
    const { status, data } = await fetchSportEvents.execute();

    let statusCode = StatusCodes.OK;
    if (status === ResponseStatus.Failed) {
      statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }

    const serviceResponse = new ServiceResponse(status, 'Sport Events', data, statusCode);
    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
