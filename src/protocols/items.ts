import { FeesCalculated } from "./fees";

export type ItemEntity = {
  id: number;
  name: string;
  price: number;
};

export type Item = Omit<ItemEntity, "id">;

export type ItemAndFees = {
  id: number;
  name: string;
  price: number;
  fees: FeesCalculated[];
};
