import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo } from "react";

export default function BranchSection() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `AIzaSyAhjl1X_pQkIAeTUWlWv4cKKUDqgyxDCQE`,
  });

  if (loadError) {
    return <div>Failed to load Google Maps</div>;
  }
  if (isLoaded) {
    return <Map />;
  }
}
function Map() {
  const options = {
    zoomControl: true,
  };
  const center = useMemo(
    () => ({ lat: 47.91452407935608, lng: 106.91040213194563 }),
    []
  );
  const currentLocation = { lat: 49.91452407935608, lng: 106.91040213194563 };
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };
  return (
    <div className="w-full h-[250px] ">
      <GoogleMap
        mapContainerClassName=""
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        <MarkerF position={center} />
        <Marker position={currentLocation} />
        {/* <Marker position={center} /> */}
      </GoogleMap>
    </div>
  );
}
