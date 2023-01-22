export type InstitutionEntity = {
  id: number;
  name: string;
};

export type Institution = Omit<InstitutionEntity, "id">;
