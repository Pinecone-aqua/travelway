interface PropType {
  string: string;
}

export default function PageButton(props: PropType): JSX.Element {
  const { button, className } = props;

  return (
    <>
      <button className={className}>{button}</button>
    </>
  );
}
