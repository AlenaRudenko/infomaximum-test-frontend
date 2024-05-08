import { FC } from "react";
import carsJSON from "../../../fake_cars.json";
import { Query } from "../../../graphql/generated";
import { CarItem } from "./components/car-item/CarItem";
import { Filter } from "../../../components/filter/Filter";
import { Search } from "../../../components/search/Search";
import { Container, StyledCars, StyledSearchSortBar } from "./Cars.styles";

const Cars: FC = () => {
  const cars: Query["cars"] = carsJSON;

  return (
   <Container>
     <StyledSearchSortBar>
        <Filter />
        <Search />
      </StyledSearchSortBar>
      <StyledCars>
      {cars.map((car) => (
        <CarItem {...car} />
      ))}
      </StyledCars>
   </Container>
 

  );
};

export default Cars;
