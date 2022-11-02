export const currenciesToArray = (currenciesData: any) => {
  const countries = Object.values(currenciesData);
  const currencies = Object.keys(currenciesData);
  return countries.map((country, i) => ({
    value: currencies[i] as string,
    label: country,
  }));
};
