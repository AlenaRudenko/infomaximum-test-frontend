import { useEffect } from "react";
import { Filter } from "../../components/filter/Filter";
import { Search } from "../../components/search/Search";
import {
  Container,
  ScrollContainer,
  StyledBanner,
  StyledCars,
  StyledSearchSortBar,
} from "./Cars.styles";
import { RootStore } from "../../stores/cars-store";
import { observer } from "mobx-react-lite";
import { CarItem } from "./components/car-item/CarItem";
import { Spinner } from "../../components/spinner/Spinner";

const Cars = observer(({ rootStore }: { rootStore: typeof RootStore }) => {
  useEffect(() => {
    const result = rootStore.getCars();
  }, []);

  return (
    <ScrollContainer>
      <Container>
        <StyledSearchSortBar>
          <Filter
            onFilterChange={rootStore.handleFilter}
            value={rootStore.filterValue}
          />
          <Search
            placeholder='Найти авто'
            onTextChange={rootStore.handleSearchInput}
            onButtonClick={rootStore.handleSearchButton}
            value={rootStore.searchValue}
          />
        </StyledSearchSortBar>
        {rootStore.status === "pending" ? (
          <Spinner />
        ) : rootStore.status === "error" ? (
          <StyledBanner>
            <h3>Ошибка подключения к серверу</h3>
            <h3>Обновите страницу</h3>
          </StyledBanner>
        ) : !rootStore.cars.length ? (
          <StyledBanner>
            <h3>Машин не найдено</h3>
          </StyledBanner>
        ) : (
          <StyledCars>
            {rootStore.cars.map((car) => (
              <CarItem
                car={car}
                key={car.id}
                isFavorite={rootStore.favoriteCars.some(
                  (el) => el.id === car.id
                )}
                handleFavoriteButton={rootStore.handleFavoriteCar}
              />
            ))}
          </StyledCars>
        )}
      </Container>
    </ScrollContainer>
  );
});

export default Cars;
