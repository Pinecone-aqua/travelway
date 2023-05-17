import { Dispatch, SetStateAction } from "react";

interface PropType {
  setAddIndicator: Dispatch<SetStateAction<string[]>>;
  addIndicator: string[] | never;
}
export default function ModalInput(props: PropType): JSX.Element {
  const { setAddIndicator } = props;
  const { addIndicator } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function saveInput(e: any): void {
    e.preventDefault();
    if (e.target.activity.value !== "") {
      setAddIndicator([...addIndicator, e.target.activity.value]);
      e.target.activity.value = "";
    }
  }

  return (
    <>
      <form onSubmit={saveInput} className="[w-400px] ">
        <div className="m-2">toDoList нэмэх</div>
        <div className="w-[390px]  flex justify-between">
          <input
            name="activity"
            className="w-4/6 p-2 rounded-xl"
            type="text reset"
          />
          <button
            className="bg-gradient-to-r from-tocolor to-mycolor text-white  rounded-xl p-2 ml-2 w-2/6"
            type="submit"
          >
            нэмэх
          </button>
        </div>
      </form>
    </>
  );
}
