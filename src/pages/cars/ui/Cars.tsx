import { FC } from "react";
import carsJSON from "../../../fake_cars.json";
import { Query } from "../../../graphql/generated";
import { CarItem } from "./components/car-item/CarItem";
import { Filter } from "../../../components/filter/Filter";
import { Search } from "../../../components/search/Search";

const Cars: FC = () => {
  const cars: Query["cars"] = carsJSON;

  return (
    <div style={{  padding: '0 20px',
      margin: '0 auto',
      marginTop: '116px',
      maxWidth: '1920px'}}>
        <div style={{display:'flex', alignItems:'center', width:'100%',justifyContent:'space-between' }}>
                  <Filter />
        <Search />
        </div>

<div style={{display: 'grid',marginTop:'42px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',
  marginBottom: '150px'}}>
      {cars.map((car) => (
        <CarItem {...car} />
      ))}
    </div>
    </div>

  );
};

export default Cars;
