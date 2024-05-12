import { observer } from "mobx-react-lite";
import { AppButton } from "../../../../components/buttons/app-button/AppButton";
import { IconButton } from "../../../../components/buttons/icon-button/IconButton";
import {
  StyledButtonContainer,
  StyledCarImageContainer,
  StyledCarSection,
  StyledDescription,
  StyledDescriptionContainer,
  StyledImage,
  StyledImageBanner,
  StyledModelBrand,
  StyledPriceYear,
} from "./CarItem.styles";
import { TCarItem } from "./types";
import { API_BASE_URL } from "../../../../constants/apiBaseUrl";

export const CarItem = observer(
  ({ car, isFavorite, handleFavoriteButton }: TCarItem) => {
    const {
      model,
      model_year,
      price,
      brand,
      color,
      img_src,
      availability,
      id,
    } = car;

    return (
      <StyledCarSection>
        <StyledCarImageContainer>
          <StyledImage
            $isDisabled={!availability}
            src={API_BASE_URL + img_src}
          />
          {!availability && (
            <StyledImageBanner>
              <h3>Нет в наличии</h3>
            </StyledImageBanner>
          )}
        </StyledCarImageContainer>
        <StyledDescriptionContainer>
          <StyledDescription>
            <StyledModelBrand>{brand + " " + model}</StyledModelBrand>
            <StyledPriceYear>
              <p>Год: {model_year}</p>
              <p>Цвет: {color}</p>
            </StyledPriceYear>
            <h4>от {price} </h4>
          </StyledDescription>
          <StyledButtonContainer>
            <AppButton
              type='card'
              text='Купить'
              onClick={() => {}}
              $isDisabled={!availability}
            />
            <IconButton
              type='heart'
              $isDisabled={!availability}
              $isFavorite={isFavorite}
              onButtonClick={() => handleFavoriteButton(id)}
            />
          </StyledButtonContainer>
        </StyledDescriptionContainer>
      </StyledCarSection>
    );
  }
);
