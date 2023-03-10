import { FeesEntity } from "./fees";

export type InstitutionEntity = {
  id: number;
  name: string;
};

export type Institution = Omit<InstitutionEntity, "id">;

export type InstitutionAndFees = {
  id: number;
  name: string;
  fees: FeesEntity[];
};
