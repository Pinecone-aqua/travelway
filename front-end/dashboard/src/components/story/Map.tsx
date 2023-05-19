import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Dispatch, SetStateAction } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 46.052,
  lng: 103.05,
};

const options = {
  zoomControl: true,
};
interface PropType {
  clickedLocation: object | undefined;
  setClickedLocation: Dispatch<
    SetStateAction<{ lat: number; lng: number } | undefined>
  >;
}

export default function Map(props: PropType) {
  const { clickedLocation, setClickedLocation } = props;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMarkerClick = (event: any) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setClickedLocation({ lat, lng });
    console.log("Clicked coordinates:", lat, lng);
    console.log("Clicked coordinates:", clickedLocation);
  };

  return (
    <div className="flex flex-col gap-8 md:flex md:flex-row md:items-center">
      <div className="w-full h-[400px]">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={5}
          options={options}
          onClick={handleMarkerClick}
        >
          {clickedLocation && (
            <MarkerF position={clickedLocation as google.maps.LatLngLiteral} />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
