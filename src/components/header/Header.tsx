import logo from "./../../assets/logo/Frame 2.png";
import { AppButton } from "../buttons/app-button/AppButton";
import {
  Container,
  HeaderContacts,
  StyledHeader,
  StyledHeaderLogo,
} from "./Header.styles";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleFavorite = () => {
    navigate("/favoriteCars");
  };

  const handleCatalog = () => {
    navigate("/catalog");
  };

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <img src={logo} alt='КупиАвто логотип' />
        <AppButton type='catalog' text='Каталог' onClick={handleCatalog} />
      </StyledHeaderLogo>
      <Container>
        <HeaderContacts>
          <h4>Москва, Волгоградский пр-кт, 43, стр 1</h4>
          <a href='tel:+78005553535'>+7 800 555 35 35</a>
        </HeaderContacts>
        <AppButton text='Избранное' type='favorite' onClick={handleFavorite} />
      </Container>
    </StyledHeader>
  );
};
