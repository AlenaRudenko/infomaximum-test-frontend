import { FilterEnum } from "../components/filter/types";
import { Car } from "../graphql/generated";

export interface IRootStore {
  cars: Car[];
  favoriteCars: Car[];
  searchValue: string;
  filterValue: FilterEnum;
  status: "pending" | "done" | "error";
}
