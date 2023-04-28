import { Dispatch, SetStateAction } from "react";

export default function ModalInput(props: {
  setAddIndicator: Dispatch<SetStateAction<never[]>>;
  addIndicator: string[] | never;
}): JSX.Element {
  const { setAddIndicator } = props;
  const { addIndicator } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function saveInput(e: any): void {
    e.preventDefault();
    if (e.target.activity.value !== "") {
      setAddIndicator([...addIndicator, e.target.activity.value]);
    }
  }

  return (
    <>
      <form onSubmit={saveInput} className="m-3">
        <div>toDoList нэмэх</div>
        <input name="activity" className="p-2 rounded-xl" type="text" />
        <button className="bg-cyan-500 rounded-xl p-2 ml-2" type="submit">
          нэмэх
        </button>
      </form>
    </>
  );
}