import axios from "axios";

export default function CreateQuest(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createHandler(e: any): void {
    e.preventDefault();

    axios.post(`http://localhost:3009/quests/create`, {
      title: e.target.title.value,
      description: e.target.description.value,
      myth: e.target.myth.value,
    });
  }

  return (
    <>
      <form
        className=" flex flex-col bg-pink-300 rounded-2xl w-full h-100 items-center"
        onSubmit={createHandler}
      >
        <div>
          <div className="text-3xl"> title</div>
          <input className="text-2xl" name="title" />
        </div>

        <div className="text-l">
          <div className="text-3xl">description</div>
          <input
            type="text"
            name="description"
            className="block w-auto text-slate-500 h-36 file:rounded-full"
          />
        </div>
        <div>
          <div className="text-2xl">domog</div>
          <input type="text" name="myth" className="disabled:opacity-75" />
        </div>

        <div>
          <div> hiij boloh zuils</div>
          <input type="text" className="my-2" />
        </div>
        <div className="w-1/2">
          <p>зураг нэмэх</p>
          <input type="file" />
        </div>
        <button
          className="bg-green-500 px-4 py-2 rounded-xl border-2"
          type="submit"
        >
          creates
        </button>
      </form>
    </>
  );
}
