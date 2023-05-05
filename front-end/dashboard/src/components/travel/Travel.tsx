import { dayType, travelType } from "@/util/types";
import axios from "axios";

interface PropType {
  unit: travelType;
}
export default function Travel(props: PropType): JSX.Element {
  const data = props.unit;
  const plan = data.day;
  function deleteHandler(travelId: string) {
    axios.delete(`http://localhost:3009/travels/${travelId}`);
    console.log(travelId);
  }

  return (
    <div className="flex flex-col min-h-96 h-100 w-full bg-gray-200 rounded-2xl p-10 mb-10 ">
      <h1>{data._id}</h1>
      <p>{data.description}</p>
      <h2>
        {plan.map((unit: dayType, index: number) => (
          <div key={index} className="flex my-3">
            <picture>
              <img src={unit.image} alt={""} width={500} height={500} />
            </picture>
            <div>
              <h1>{unit.title}</h1>
              <p>{unit.description}</p>
            </div>
          </div>
        ))}
      </h2>

      <button
        onClick={() => deleteHandler(data._id)}
        className="h-12 w-32 bg-cyan-500 p-3 m-3  rounded-xl text-white self-end"
      >
        delete
      </button>
    </div>
  );
}
