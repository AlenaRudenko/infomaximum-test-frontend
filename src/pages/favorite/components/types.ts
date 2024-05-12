import { Car } from "../../../graphql/generated";

export type TFavoriteCar = {
  car: Car;
  handleDeleteButton: (id: number) => void;
};
