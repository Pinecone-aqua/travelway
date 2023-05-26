import React from "react";
// import "./scss/exo.scss";

export default function Explore(): JSX.Element {
  return (
    <>
      <section className="quoteVideoBlock is-inview bg-[#121718]" data-scroll>
        <div className="background">
          <div className="innerBackground">
            <video loop muted playsInline autoPlay>
              <source
                type="video/mp4"
                src="https://player.vimeo.com/external/565526339.hd.mp4?s=d76a061e031cc8d0cb4998060fe7d753e0878231&profile_id=174"
              />
            </video>
            <div
              className="image"
              style={{
                backgroundImage: `url('https://www.kimiaviation.com/thumbs/1100x0/assets/img/plane-window.png')`,
              }}
            />
          </div>
        </div>
        <div className="quote is-inview" data-scroll>
          <div
            className="contentWrapper in-inview"
            data-scroll
            data-scroll-speed="1"
          >
            <div className="perspectiveWrapper">
              <h1 className="hugeTitle text-white ">
                Explore
                <br />
                and <strong>Share</strong> <br />
                you&apos;r
                <br />
                <strong>experience</strong>
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="scrollDownWrapper is-inview"></div> */}
      </section>
    </>
  );
}
