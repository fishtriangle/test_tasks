import { PrismaClient, Statistics } from "@prisma/client";
import {StatisticsModel, BodyPayloadModel, QueryParamsModel, StatisticsOutputModel} from './statistics.types';

const prisma = new PrismaClient();

export const createStatistics = async (statisticsData: BodyPayloadModel): Promise<StatisticsModel | undefined> => {
  try {
    const insertResult = await prisma.statistics.create({
      data: statisticsData,
    });
    prisma.$disconnect();
    return insertResult;
  } catch (error) {
    console.error(error);
  }
};

export const getStatistics = async ({ shopId, plu, dateAfter, dateBefore, action, page, perPage }: QueryParamsModel): Promise<StatisticsOutputModel | undefined> => {
  try {
    const statistics = await prisma.statistics.findMany({
      skip: page ? (Number(page) - 1) * Number(perPage) : 0,
      take: perPage ? Number(perPage) : undefined,
      where: {
        shop_id: Number(shopId) || undefined,
        plu: plu || undefined,
        action,
        date: { 
          gte: dateAfter|| undefined, 
          lte: dateBefore || undefined 
        }
      }
    });
    prisma.$disconnect();
    return { 
      statistics, 
      page: page ? Number(page) : undefined, 
      perPage: perPage ? Number(perPage) : undefined,
    };
  } catch (error) {
    console.error(error);
  }
};