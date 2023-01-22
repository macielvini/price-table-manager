export type FeesEntity = {
  id: number;
  institution_id: number;
  initial_fee: number;
  monthly_fee: number;
  name: string;
  max_num_installments: number;
};

export type Fees = Omit<FeesEntity, "id">;

export type FeesPartial = Partial<FeesEntity>;

export type FeesCalculated = {
  id: number;
  installmentNum: number;
  installmentValue: number;
};
