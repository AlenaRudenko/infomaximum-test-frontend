
import { AppButton } from "../../../../../components/buttons/app-button/AppButton";
import { FavButton } from "../../../../../components/buttons/fav-button/FavButton";
import { TCar } from "../../../../../interfaces/car.type";
import "./styles.scss";

export const CarItem = (car: TCar) => {
  const { model, model_year, price, brand, color, img_src, availability, id } =
    car;
  return (
    <section className='car__section'>
      <div className='car__image'>
        <img src={img_src} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}>
        <h3>{brand + " " + model}</h3>
        <div style={{ display: "flex" }}>
          <p>Год: {model_year}</p>
          <p>Цвет: {color}</p>
        </div>
        <h4>от {price} </h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AppButton type='card' text='Купить' onClick={() => {}} />
          <FavButton />
        </div>
      </div>
    </section>
  );
};
