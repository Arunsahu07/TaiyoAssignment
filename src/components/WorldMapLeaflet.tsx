import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { useQuery } from "react-query";
import { CountryData, getCountryData } from "../utils/getCountryData";

const WorldMapLeaflet = () => {
  const {
    isLoading,
    isError,
    data: countriesData,
  } = useQuery({ queryKey: ["countries"], queryFn: getCountryData });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>something went wrong</span>;
  }

  return (
    <MapContainer center={[20, 77]} zoom={3} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {Array.isArray(countriesData) &&
        countriesData.map((country: CountryData) => (
          <Marker
            position={[country.countryInfo.lat, country.countryInfo.long]}
            key={country.country}
          >
            <Popup>
              <div className="text-lg font-bold">{country.country}</div>
              <div className="text-lg">
                Cases:
                {country.cases}
              </div>
              <div className="text-lg">
                Active:
                {country.active}
              </div>
              <div className="text-lg">
                Deaths:
                {country.deaths}
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default WorldMapLeaflet;
