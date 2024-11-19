"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const statistics_route_1 = require("./statistics/statistics.route");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use('/api', statistics_route_1.statisticsRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
