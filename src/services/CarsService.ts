import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_CARS_QUERY } from "../graphql/queries";
import { Car, QueryCarsArgs } from "../graphql/generated";

class CarsService {
  public client = new ApolloClient({
    uri: "http://localhost:4000/api",
    cache: new InMemoryCache(),
  });

  getCarsCard(variables?: QueryCarsArgs) {
    return this.client.query<{ cars: Car[] }>({
      query: GET_ALL_CARS_QUERY,
      variables,
    });
  }
}

export const CarsServizz = new CarsService();
