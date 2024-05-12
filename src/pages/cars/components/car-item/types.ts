import { Car } from "../../../../graphql/generated";

export type TCarItem = {
  car: Car;
  isFavorite: boolean;
  handleFavoriteButton: (id: Car["id"]) => void;
};
