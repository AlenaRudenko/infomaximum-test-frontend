export enum FilterEnum {
  AVAILABILITY = "AVAILABILITY",
  AZ_NAME = "AZ_NAME",
  ZA_NAME = "ZA_REVERSE_NAME",
  MODEL_YEAR_NEW = "MODEL_YEAR_NEW",
  MODEL_YEAR_OLD = "MODEL_YEAR_OLD",
  LOW_PRICE = "LOW_PRICE",
  HIGH_PRICE = "HIGH_PRICE",
}

export const filterValues: Record<FilterEnum, string> = {
  [FilterEnum.AVAILABILITY]: "Сначала в наличии",
  [FilterEnum.AZ_NAME]: "По имени (A-Z)",
  [FilterEnum.ZA_NAME]: "По имени (Z-A)",
  [FilterEnum.MODEL_YEAR_NEW]: "Сначала новее",
  [FilterEnum.MODEL_YEAR_OLD]: "Сначала старше",
  [FilterEnum.LOW_PRICE]: "Сначала дешевле",
  [FilterEnum.HIGH_PRICE]: "Сначала дороже",
};

export interface IProps {
  onFilterChange: (value: FilterEnum) => void;
  value: string;
}
