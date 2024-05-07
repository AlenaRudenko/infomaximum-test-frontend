import { FC } from "react";
import carsJSON from "../../../../fake_cars.json";
import { Query } from "../../../../graphql/generated";
import { CarItem } from "./components/car-item/CarItem";

const Cars: FC = () => {
  const cars: Query["cars"] = carsJSON;

  return (
    <div style={{width:'100%', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
      {cars.map((car) => (
       <CarItem {...car}/>
      ))}
    </div>
  );
};

export default Cars;
