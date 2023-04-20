import { dayType, travelType } from "@/util/types";
import axios from "axios";

export default function Travel(props: { unit: travelType }): JSX.Element {
  const data = props.unit;
  const plan = data.day;
  function deleteHandler(travelId: string) {
    axios.delete(`http://localhost:3009/travels/${travelId}`);
    console.log(travelId);
  }
  return (
    <div className="h-96 w-full rounded-3xl bg-purple-200 my-9">
      <h1>{data._id}</h1>
      <p>{data.description}</p>
      <h2>
        {plan.map((unit: dayType, index: number) => (
          <div key={index} className="flex my-3">
            <picture>
              <img className="h-16 w-16 rounded-2xl" src={unit.image} alt="" />
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
        className="h-12 w-32 bg-purple-300 rounded-2xl"
      >
        delete
      </button>
    </div>
  );
}
