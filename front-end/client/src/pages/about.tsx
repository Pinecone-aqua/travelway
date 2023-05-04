
export default function about() {
  return (
    <>
      <div>
        <div className=" flex justify-center">
          <picture>
            <source media="(min-width:650px)" srcSet="./images/work.webp" />
            <source media="(min-width:450px)" srcSet="./images/work.webp" />
            <img src="./images/work.webp" alt="pic" width="width:auto" />
          </picture>
        </div>
      </div>
    </>
  );
}
