export default function Suggest(props: {
  toDo?: string[] | undefined;
}): JSX.Element {
  const { toDo } = props;
  function suggestChangeHandler(newVal: string, i: number) {
    if (toDo) toDo[i] = newVal;
  }
  return (
    <>
      {toDo?.map((unit: string, index: number) => (
        <div key={index}>
          <input
            onChange={(e): void => suggestChangeHandler(e.target.value, index)}
            className="my-2 text-slate-500  w-full rounded-2xl p-2"
            name={`activity-${index}`}
            defaultValue={unit}
          />
        </div>
      ))}

      <input
        className="rounded-2xl p-2 my-3"
        type="text"
        name="addSuggest"
        onChange={(e): void => {
          e.target.value;
        }}
      />
    </>
  );
}
