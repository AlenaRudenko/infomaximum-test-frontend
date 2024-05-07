import { FC } from "react";
import carsJSON from "../../../../fake_cars.json";
import { Query } from "../../../../graphql/generated";
import { CarItem } from "./components/car-item/CarItem";

const Cars: FC = () => {
  const cars: Query["cars"] = carsJSON;

  return (
    <div
      style={{
        maxWidth: "1920px",
        display: "flex",
        padding: "20px",
        flexWrap: "wrap",
        columnGap: "20px",
        rowGap: "73px",
        border: "1px solid black",
      }}
    >
      {cars.map((car) => (
        <CarItem {...car} />
      ))}
    </div>
  );
};

export default Cars;
