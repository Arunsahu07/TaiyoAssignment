const COUNTRY_DATA_API = "https://disease.sh/v3/covid-19/countries";

export type CountryData = {
  country: string;

  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  countryInfo: {
    flag: string;
    _id: number;
    lat: number;
    long: number;
  };
};
export const getCountryData = async () => {
  const data = await (await fetch(COUNTRY_DATA_API)).json();
  console.log({ data });

  return data as CountryData;
};
