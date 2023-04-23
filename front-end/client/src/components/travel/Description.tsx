export default function Description() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-[30px] font-semibold">
            Description halo test test{" "}
          </p>
          <div className="flex items-center gap-2">
            <picture>
              <img
                src="../../images/white.svg"
                alt="pic"
                className="w-[40px] h-[40px] rounded-full bg-green-500"
              />
            </picture>
            <div className="gap-2 flex">
              <p>by</p>
              <a href="/" className="underline underline-offset-1">
                Naruto
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <picture>
            <img
              src="../../images/fuji.webp"
              alt="pic"
              className="w-[1473px] h-[750px] object-cover"
            />
          </picture>
          <div className="flex flex-wrap justify-between pt-10">
            <div className="w-[50rem] text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae esse labore unde molestiae officia, at optio,
                distinctio adipisci incidunt iure totam dolore repellat nemo a,
                nesciunt ex ratione. Blanditiis, tempore! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Nam possimus fugiat, illum
                soluta ipsam doloribus delectus numquam error harum perferendis
                vel architecto? Voluptate impedit, illo modi suscipit architecto
                repellat provident. Magni esse, suscipit, recusandae laudantium
                praesentium inventore eveniet consequatur dolorum dolores
                molestiae, itaque aperiam ad ut alias enim. Corrupti, obcaecati?
              </p>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae esse labore unde molestiae officia, at optio,
                distinctio adipisci incidunt iure totam dolore repellat nemo a,
                nesciunt ex ratione. Blanditiis, tempore! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Nam possimus fugiat, illum
                soluta ipsam doloribus delectus numquam error harum perferendis
                vel architecto? Voluptate impedit, illo modi suscipit architecto
                repellat provident. Magni esse, suscipit, recusandae laudantium
                praesentium inventore eveniet consequatur dolorum dolores
                molestiae, itaque aperiam ad ut alias enim. Corrupti, obcaecati?
              </p>
              <hr className="text-black mt-10"/>
            </div>
            <div className="w-[32rem]">
              <div className="w-[32rem]">
                <p className="text-[25px] font-semibold ">More from our blog</p>
                <picture>
                  <img
                    src="../../images/fuji.webp"
                    alt="pic"
                    className="pt-2"
                  />
                </picture>
                <div className="grid gap-2">
                  <p className="text-[20px] font-semibold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, fuga. Molestiae eveniet maiores id dolorum dolore
                    ex veritatis...
                  </p>
                </div>
              </div>
              <div className="w-[32rem] mt-7">
                <p className="text-[25px] font-semibold ">More from our blog</p>
                <picture>
                  <img
                    src="../../images/fuji.webp"
                    alt="pic"
                    className="pt-2"
                  />
                </picture>
                <div className="grid gap-2">
                  <p className="text-[20px] font-semibold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, fuga. Molestiae eveniet maiores id dolorum dolore
                    ex veritatis...
                  </p>
                </div>
              </div>
              <button className="w-[32rem] border border-[1px] border-black rounded-[20px] py-[10px] font-bold mt-[50px]">See all blog post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
