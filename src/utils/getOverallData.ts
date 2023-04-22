const API_URL = "https://disease.sh/v3/covid-19/all";

export const getOverallData = async () => {
  const data = await (await fetch(API_URL)).json();
  console.log({ data });

  return data;
};
