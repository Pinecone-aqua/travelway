interface PropsType {
  btnName: string | number;
  btnClass: string;
}

export default function PageBtn(props: PropsType): JSX.Element {
  const { btnName, btnClass } = props;
  return (
    <>
      <button className={btnClass}>{btnName}</button>
    </>
  );
}
