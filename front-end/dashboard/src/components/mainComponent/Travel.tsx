import { planType, travelType } from "@/util/types";

export default function Travel(props: { unit: travelType }): JSX.Element {
  const data = props.unit;
  const plan = data.plan;
  return (
    <div className="h-96 w-full rounded-3xl bg-purple-200 my-9">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <h2>
        {plan.map((unit: planType, index: number) => (
          <div key={index} className="flex my-3"><picture>
            <img className="h-16 w-16 rounded-2xl" src={unit.image} alt="" />
          </picture>

            <div>
              <h1>{unit.title}</h1>
              <p>{unit.description}</p>
            </div>
          </div>
        ))}
      </h2>
    </div>
  );
}

