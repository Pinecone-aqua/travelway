import ProvinceFilter from "@/components/story/ProvinceFilter";
import CategoryFilter from "@/components/story/StoryFilter";
import StorySearch from "@/components/story/StorySearch";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import { useRouter } from "next/router";
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
export default function BranchSection(props: {
  markers: StoryType[] | undefined;
}) {
  const router = useRouter();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `AIzaSyAhjl1X_pQkIAeTUWlWv4cKKUDqgyxDCQE`,
  });
  const { markers } = props;

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;
  function handleClick(id: string) {
    router.push(`/stories/${id}`);
  }

  return (
    <div>
      <div className="flex justify-between m-5">
        <CategoryFilter />
        <StorySearch />
        <ProvinceFilter />
      </div>

      <div className="flex flex-col gap-8 md:flex md:flex-row md:items-center">
        <div className="w-full h-[500px]">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={5}
            options={options}
          >
            {markers?.map((marker, i) => (
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: { query: any }) {
  const { query } = context;
  console.log("query", query.province, query.category);
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/stories/mark?&${
        query.search ? `&search=${query.search}` : ""
      }${query.category ? `&category=${query.category}` : ""}${
        query.province ? `&province=${query.province}` : ""
      }`
    );
    console.log(res.status);

    if (res.status === 200) {
      return {
        props: {
          markers: res.data,
        },
      };
    } else
      return {
        props: {
          notFound: true,
        },
      };
  } catch (error) {
    console.log(error);
  }
}
