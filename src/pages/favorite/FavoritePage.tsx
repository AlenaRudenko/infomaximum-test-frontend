import { StyledCarsContainer, StyledContainer } from "./FavoritePage.styles";
import { RootStore } from "./../../stores/cars-store";
import { FavoriteCar } from "./components/FavoriteCar";
import { observer } from "mobx-react-lite";
import { ScrollContainer } from "../cars/Cars.styles";

export const FavoritePage = observer(
  ({ rootStore }: { rootStore: typeof RootStore }) => {
    return (
      <ScrollContainer>
        <StyledContainer>
          <h1>{`Избранные товары - ${rootStore.favoriteCars.length} позиций`}</h1>
          <StyledCarsContainer>
            {rootStore.favoriteCars.map((car) => (
              <FavoriteCar
                car={car}
                handleDeleteButton={rootStore.handleFavoriteCar}
              />
            ))}
          </StyledCarsContainer>
        </StyledContainer>
      </ScrollContainer>
    );
  }
);
