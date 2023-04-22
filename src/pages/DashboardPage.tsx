import LineChart from "../components/LineChart";
import { getOverallData } from "../utils/getOverallData";
import ShowCard from "../components/OverallDataCards";
import { useQuery } from "react-query";
import WorldMapLeaflet from "../components/WorldMapLeaflet";

const DashboardPage = () => {
  const {
    isLoading,
    isError,
    data: overallData,
  } = useQuery({
    queryKey: ["overallData"],
    queryFn: getOverallData,
  });
  if (isError) {
    return <span>Something went wrong</span>;
  }

  return (
    <div className="p-3 py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-1">
          <div className="grid px-5 grid-rows-3 h-full gap-5">
            <ShowCard
              isLoading={isLoading}
              title="Total Cases"
              count={overallData?.cases}
            />
            <ShowCard
              isLoading={isLoading}
              title="Total Deaths"
              count={overallData?.deaths}
            />
            <ShowCard
              isLoading={isLoading}
              title="Total Recovered"
              count={overallData?.recovered}
            />
          </div>
        </div>
        <div className="col-span-2 px-5 pt-5 md:pt-0">
          <LineChart />
        </div>
      </div>
      <div className="grid px-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-5 gap-5">
        <ShowCard
          isLoading={isLoading}
          title="Total Active"
          count={overallData?.active}
        />
        <ShowCard
          isLoading={isLoading}
          title="Total Tests"
          count={overallData?.tests}
        />
        <ShowCard
          isLoading={isLoading}
          title="Total Critical"
          count={overallData?.critical}
        />
        <ShowCard
          isLoading={isLoading}
          title="Total Population"
          count={overallData?.population}
        />
        <ShowCard
          isLoading={isLoading}
          title="Total Affected Countries"
          count={overallData?.affectedCountries}
        />
      </div>
      <div className="p-5 py-3 h-96">
        {/* <WorldMap /> */}
        <WorldMapLeaflet />
      </div>
    </div>
  );
};

export default DashboardPage;
