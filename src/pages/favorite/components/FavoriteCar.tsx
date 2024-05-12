import { AppButton } from "../../../components/buttons/app-button/AppButton";
import { IconButton } from "../../../components/buttons/icon-button/IconButton";
import { API_BASE_URL } from "../../../constants/apiBaseUrl";
import {
  StyledButtonContainer,
  StyledCarContainer,
  StyledCarDescriptionContainer,
  StyledCarImage,
  StyledCarPic,
  StyledDescription,
  StyledPriceButtonCOntainer,
  StyledText,
} from "./FavoriteCar.styles";
import { TFavoriteCar } from "./types";

export const FavoriteCar = ({ car, handleDeleteButton }: TFavoriteCar) => {
  const { model, model_year, price, brand, color, img_src, id, description } =
    car;

  return (
    <StyledCarContainer>
      <StyledCarImage>
        <StyledCarPic src={API_BASE_URL + img_src} />
      </StyledCarImage>
      <StyledCarDescriptionContainer>
        <StyledDescription>
          <h2>{brand + " " + model}</h2>
          <StyledText>{description}</StyledText>
          <p>Год: {model_year}</p>
          <p>Цвет: {color}</p>
        </StyledDescription>
        <StyledPriceButtonCOntainer>
          <h3>{`от ${price}`}</h3>
          <StyledButtonContainer>
            <AppButton
              type='saved'
              text='Выбрать комплектацию'
              onClick={() => {}}
            />
            <IconButton
              type='delete'
              onButtonClick={() => handleDeleteButton(id)}
            />
          </StyledButtonContainer>
        </StyledPriceButtonCOntainer>
      </StyledCarDescriptionContainer>
    </StyledCarContainer>
  );
};
