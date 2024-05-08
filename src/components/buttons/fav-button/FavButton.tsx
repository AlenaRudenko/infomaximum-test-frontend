import { StyledFavButton } from "./FavButton.styles";
import "./styles.scss";

export const FavButton = ({isDisabled=false, isFavorited=false}) => {
  return <StyledFavButton isFavorited={isFavorited} isDisabled={isDisabled}/>
};
