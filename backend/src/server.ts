import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import { pino } from 'pino';


import { healthCheckRouter } from '@/api/healthCheck/healthCheckRouter';
import { sportEventRouter } from '@/api/sportEvent/sportEventRouter';
// import { openAPIRouter } from '@/api-docs/openAPIRouter';
import errorHandler from '@/middleware/errorHandler';
import requestLogger from '@/middleware/requestLogger';
import { env } from '@/utils/envConfig';

const logger = pino({ name: 'server start' });
const app: Express = express();

// Set the application to trust the reverse proxy
app.set('trust proxy', true);

// Middlewares
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());

// Request logging
app.use(requestLogger);

// Routes
app.use('/_meta/health-check', healthCheckRouter);
app.use('/api/events', sportEventRouter);

// Error handlers
app.use(errorHandler());

export { app, logger };