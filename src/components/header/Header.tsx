import logo from "./../../assets/logo/Frame 2.png";
import { AppButton } from "../buttons/app-button/AppButton";
import { Container, HeaderContacts, StyledHeader, StyledHeaderLogo } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <img src={logo} alt='КупиАвто логотип' />
        <AppButton text='Каталог' onClick={() => {}} />
      </StyledHeaderLogo>
      <Container>
        <HeaderContacts>
          <h4>Москва, Волгоградский пр-кт, 43, стр 1</h4>
          <a href='tel:+78005553535'>
            +7 800 555 35 35
          </a>
        </HeaderContacts>        
        <AppButton text='Избранное' type='favorite' onClick={() => {}} />
      </Container>
    </StyledHeader>
  );
};
