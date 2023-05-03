import ContainerPages from "./containerPages";

export default function Home() {
  return (
    <>
      <div>
        <ContainerPages />
        <div className=" flex justify-center">
          <picture>
            <img src="./images/work.webp" alt="pic" />
          </picture>
        </div>
      </div>
    </>
  );
}
