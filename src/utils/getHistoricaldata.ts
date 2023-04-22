const API = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

export const getHistoricalData = async () => {
  const data = await (await fetch(API)).json();
  console.log({ data });

  return data;
};
