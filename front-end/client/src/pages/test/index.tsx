export default function Test(): JSX.Element {
  const province = [
    "All province",
    "Архангай",
    "Баян-Өлгий",
    "Баянхонгор",
    "Булган",
    "Говь-Алтай",
    "Говьсүмбэр	",
    "Дархан-Уул	",
    "Дорноговь",
    "Дорнод",
    "Дундговь",
    "Завхан",
    "Орхон",
    "Өвөрхангай",
    "Өмнөговь",
    "Сүхбаатар",
    "Сэлэнгэ",
    "Төв",
    "Увс",
    "Ховд",
    "Хөвсгөл",
    "Хэнтий",
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  function filterHandler(e: any) {
    console.log(e.target.value);
  }
  return (
    <>
      <select
        className="m-5 p-2 w-64 border-2 rounded-lg"
        name=""
        id=""
        onChange={filterHandler}
      >
        {province.map((pro: string, index: number) => (
          <option key={index}>{pro}</option>
        ))}
      </select>
      <div className="h-screen w-full m-5">test</div>
    </>
  );
}
