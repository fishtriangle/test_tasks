import express from 'express';
import { statisticsRouter } from './statistics/statistics.route';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', statisticsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});