import { gql } from "@apollo/client";

export const GET_ALL_CARS_QUERY = gql`
  query AllCars($search: String) {
    cars(search: $search) {
      id
      brand
      model
      model_year
      availability
      color
      description
      img_src
      price
    }
  }
`;
