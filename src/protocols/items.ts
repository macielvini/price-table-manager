export type ItemEntity = {
  id: number;
  name: string;
  price: number;
};

export type Item = Omit<ItemEntity, "id">;
