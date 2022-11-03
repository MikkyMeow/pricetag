import { TCurrenciesData } from "./mock";

export const currenciesToArray = (currenciesData: TCurrenciesData) => {
  const countries = Object.values(currenciesData);
  const currencies = Object.keys(currenciesData);
  return countries.map((country, i) => ({
    value: currencies[i],
    label: country,
  }));
};
