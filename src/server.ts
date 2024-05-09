import express, { Express, Request, Response, NextFunction } from 'express';
import { Logger } from './utils/logger';
import creatureRouter from './routes/creature';
import actionRouter from './routes/action';
import { errorHandler } from './middleware/errorHandler';
import { RequestContext } from '@mikro-orm/core';
import { DI } from './main';

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  RequestContext.create(DI.orm.em, next);
});

// HEALTH CHECK ENDPOINT
app.get('/ping', (req: Request, res: Response, next: NextFunction) => {
  Logger.info('Health check endpoint hit.')
  res.json({ message: 'pong' });
});

Logger.info('Routes initialized');
app.use("/api/v1/creature", creatureRouter);
app.use("/api/v1/action", actionRouter)

// - ERROR HANDLER
app.use(errorHandler);

Logger.debug('Server initialized');

export default app;
