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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsRouter = void 0;
const express_1 = __importDefault(require("express"));
const statistics_service_1 = require("./statistics.service");
const statisticsRouter = express_1.default.Router();
exports.statisticsRouter = statisticsRouter;
statisticsRouter.post('/statistics', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loggedStatistics = yield (0, statistics_service_1.createStatistics)(req.body);
        res.json(loggedStatistics);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
}));
statisticsRouter.get('/statistics', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistics = yield (0, statistics_service_1.getStatistics)(req.query);
        res.json(statistics);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
}));
