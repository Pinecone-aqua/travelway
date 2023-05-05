interface PropsType {
  toDo?: string[] | undefined;
}

export default function Suggest(props: PropsType): JSX.Element {
  const { toDo } = props;
  function suggestChangeHandler(newVal: string, i: number) {
    if (toDo) toDo[i] = newVal;
  }
  //   function deleteInput(i: number) {
  //     console.log("asda", i);
  //   }

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
          {/* <button onClick={deleteInput(index)}>delete</button> */}
        </div>
      ))}

      <input
        className="rounded-2xl p-2"
        type="text"
        name="addSuggest"
        onChange={(e): void => {
          e.target.value;
        }}
      />
    </>
  );
}
