import "./styles.scss";
import logo from "./../../assets/logo/Frame 2.png";
import { AppButton } from "../buttons/delete-button/app-button/AppButton";

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='КупиАвто логотип' />
        <AppButton text='Каталог' onClick={() => {}} />
      </div>
      <div className='header__group'>
        <div className='header__contact'>
          <h4>Москва, Волгоградский пр-кт, 43, стр 1</h4>
          <a className='header__tel' href='tel:+78005553535'>
            +7 800 555 35 35
          </a>
        </div>
        <AppButton text='Избранное' type='favorites' onClick={() => {}} />
      </div>
    </header>
  );
};
