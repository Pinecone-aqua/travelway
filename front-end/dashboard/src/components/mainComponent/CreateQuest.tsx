export default function CreateQuest(): JSX.Element {
  return (
    <>
      <div className=" flex flex-col bg-pink-300 rounded-2xl w-full h-100 items-center">
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
          <div className="text-2xl">домог хууч</div>
          <input type="text" name="legend" className="disabled:opacity-75" />
        </div>

        <div>
          <div> hiij boloh zuils</div>
          <input type="text" className="my-2" />
        </div>
        <div className="w-1/2">
          <p>зураг нэмэх</p>
          <input type="file" />
        </div>
      </div>
    </>
  );
}
