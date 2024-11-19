import express, { Request, Response } from "express";
import { createStatistics, getStatistics } from './statistics.service'
import { BodyPayloadModel, QueryParamsModel } from './statistics.types';

const statisticsRouter = express.Router();

statisticsRouter.post('/statistics', async (req: Request<{}, any, BodyPayloadModel>, res:Response) => {
  try {
    const loggedStatistics = await createStatistics(req.body);
    res.json(loggedStatistics);
  } catch(error) {
    console.log(error);
    res.json(error);
  }
});

statisticsRouter.get('/statistics', async (req: Request<{}, any, any, QueryParamsModel>, res:Response) => {
  try {
    const statistics = await getStatistics(req.query);
    res.json(statistics);
  } catch(error) {
    console.log(error);
    res.json(error);
  }
});

export { statisticsRouter };