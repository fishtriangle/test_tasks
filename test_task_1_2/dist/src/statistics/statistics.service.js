"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatistics = exports.createStatistics = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createStatistics = (statisticsData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertResult = yield prisma.statistics.create({
            data: statisticsData,
        });
        prisma.$disconnect();
        return insertResult;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createStatistics = createStatistics;
const getStatistics = (_a) => __awaiter(void 0, [_a], void 0, function* ({ shopId, plu, dateAfter, dateBefore, action, page, perPage }) {
    try {
        const statistics = yield prisma.statistics.findMany({
            skip: page ? (Number(page) - 1) * Number(perPage) : 0,
            take: perPage ? Number(perPage) : undefined,
            where: {
                shop_id: Number(shopId) || undefined,
                plu: plu || undefined,
                action,
                date: {
                    gte: dateAfter || undefined,
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
    }
    catch (error) {
        console.error(error);
    }
});
exports.getStatistics = getStatistics;
