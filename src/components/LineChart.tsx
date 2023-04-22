import { Chart } from "react-google-charts";
import { getHistoricalData } from "../utils/getHistoricaldata";
import { useQuery } from "react-query";

const options = {
  title: "Cases",
  curveType: "function",
  legend: { position: "bottom" },
  height: document.body.clientWidth < 768 ? 150 : 400,
};

const LineChart = () => {
  const {
    isLoading,
    isError,
    data: hisoricalData,
  } = useQuery({
    queryKey: ["history"],
    queryFn: getHistoricalData,
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Something went wrong</span>;
  }

  const colums = [
    {
      type: "date",
      label: "Date",
    },
    {
      type: "number",
      label: "Cases",
    },
    {
      type: "number",
      label: "Deaths",
    },
    {
      type: "number",
      label: "Recovered",
    },
  ];
  const rows = Object.keys(hisoricalData.cases).map((currDate) => [
    new Date(currDate),
    hisoricalData.cases[currDate],
    hisoricalData.deaths[currDate],
    hisoricalData.recovered[currDate],
  ]);
  const chartData = [colums, ...rows];
  console.log({ chartData });

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      data={chartData}
      options={options}
    />
  );
};

export default LineChart;
