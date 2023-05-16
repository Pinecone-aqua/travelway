import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { province } from "../../../util/constant";
import { StoryType } from "../../../util/types";

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
export default function BranchSection(props: { markers: StoryType[] }) {
  const router = useRouter();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
  });
  const { markers } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function filterHandler(e: any) {
    console.log(e.target.value);
  }
  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;
  function handleClick(id: string) {
    router.push(`/test/${id}`);
  }

  return (
    <div>
      <div className="mx-auto">
        <select
          className="m-5 p-2 w-64 border-2 rounded-lg"
          name=""
          id=""
          onChange={filterHandler}
        >
          {province.map((pro: string, index: number) => (
            <option key={index}>{pro}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-8 md:flex md:flex-row md:items-center">
        <div className="w-full h-[500px]">
          {/* {data && ( */}
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={5}
            options={options}
          >
            {markers.map((marker, i) => (
              <MarkerF
                key={i}
                position={marker.coord}
                onClick={() => handleClick(marker._id)}
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch(`http://localhost:3009/stories/mark`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      markers: data,
    },
  };
}
