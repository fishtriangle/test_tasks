export interface QueryParamsModel {
  shopId?: string;
  plu?: string;
  dateAfter?: Date;
  dateBefore?: Date;
  action?: string;
  page?: string;
  perPage?: string;
}

export interface BodyPayloadModel {
  action: string;
  date: Date;
  shop_id: number;
  plu: string;
  raw_log: string;
}

export interface StatisticsModel {
  id: number;
  action: string;
  date: Date;
  shop_id: number;
  plu: string;
  raw_log: string;
}

export interface StatisticsOutputModel {
  statistics: StatisticsModel[],
  page?: number;
  perPage?: number;
}