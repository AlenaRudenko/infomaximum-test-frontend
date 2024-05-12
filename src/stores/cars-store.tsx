import { makeAutoObservable, runInAction } from "mobx";
import { CarsServizz } from "../services/CarsService";
import { Car } from "../graphql/generated";
import { FilterEnum } from "../components/filter/types";
import { IRootStore } from "./types";

class RootStoreClazz {
  cars: IRootStore["cars"] = [];
  favoriteCars: IRootStore["favoriteCars"] = [];
  searchValue: IRootStore["searchValue"] = "";
  filterValue: IRootStore["filterValue"] = FilterEnum["AVAILABILITY"];
  status: IRootStore["status"] = "pending";

  constructor() {
    makeAutoObservable(this);
  }

  handleSearchInput = (value: string) => {
    this.searchValue = value;
  };

  handleSearchButton = async () => {
    try {
      this.status = "pending";
      const response = await CarsServizz.getCarsCard({
        search: this.searchValue,
      });
      runInAction(() => {
        this.cars = response.data.cars;
        this.setFilteredCars();
        this.status = "done";
      });
    } catch (error) {
      console.log("ERROR", error);
      this.status = "error";
    }
  };

  setFilteredCars(): Car[] {
    switch (this.filterValue) {
      case FilterEnum["AZ_NAME"]: {
        return this.cars.sort((a, b) =>
          (a.brand + a.model).toLowerCase() < (b.brand + b.model).toLowerCase()
            ? -1
            : 1
        );
      }
      case FilterEnum["ZA_NAME"]: {
        return this.cars.sort((a, b) =>
          (a.brand + a.model).toLowerCase() < (b.brand + b.model).toLowerCase()
            ? 1
            : -1
        );
      }
      case FilterEnum["AVAILABILITY"]: {
        return this.cars.sort((a, b) =>
          a.availability > b.availability ? -1 : 1
        );
      }
      case FilterEnum["HIGH_PRICE"]: {
        return this.cars.sort((a, b) =>
          +a.price.replace("$", "") > +b.price.replace("$", "") ? -1 : 1
        );
      }
      case FilterEnum["LOW_PRICE"]: {
        return this.cars.sort((a, b) =>
          +a.price.replace("$", "") > +b.price.replace("$", "") ? 1 : -1
        );
      }
      case FilterEnum["MODEL_YEAR_NEW"]: {
        return this.cars.sort((a, b) => (a.model_year > b.model_year ? -1 : 1));
      }
      case FilterEnum["MODEL_YEAR_OLD"]: {
        return this.cars.sort((a, b) => (a.model_year > b.model_year ? 1 : -1));
      }
      default: {
        return this.cars;
      }
    }
  }

  handleFilter = (value: FilterEnum) => {
    this.filterValue = value;
    this.setFilteredCars();
  };

  handleFavoriteCar = (id: Car["id"]) => {
    if (this.favoriteCars.some((car) => car.id === id)) {
      const result = this.favoriteCars.filter((car) => car.id !== id);
      this.favoriteCars = result;
    } else {
      const favoriteCar = this.cars.find((car) => car.id === id);
      this.favoriteCars.push(favoriteCar!);
    }
  };

  async getCars() {
    try {
      this.status = "pending";
      const response = await CarsServizz.getCarsCard();
      runInAction(() => {
        this.cars = response.data.cars;
        this.status = "done";
      });
    } catch (error) {
      console.log("ERROR", error);
      this.status = "error";
    }
  }
}

export const RootStore = new RootStoreClazz();
