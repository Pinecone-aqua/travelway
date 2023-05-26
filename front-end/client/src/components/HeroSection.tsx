// import { UserContext } from "../../context/user.context";
// import { useContext } from "react";
import { FiGithub } from "react-icons/fi";

export default function HeroSection() {
  // const { user } = useContext(UserContext);

  return (
    <>
      <div className="dataScroller">
        <section className="headerBigBlock is-inview">
          <h1 className="color:#121718;">TravelWay</h1>
          <div className="background">
            <video
              className="headerVideo h-[100%] l-0 absolute t-0 w-[100%] object-cover"
              loop
              muted
              playsInline
              autoPlay
              poster="/thumbs/1800x1170/gfx/Kimi_seamless_video_first_frame.jpg"
            >
              <source
                type="video/mp4"
                src="https://player.vimeo.com/external/563130035.hd.mp4?s=5bd311f698519ffa90aa5136b96d1e86aa78d107&profile_id=175"
              />
            </video>
            <div className="gradient" />
          </div>
          <div className="logoWrapper">
            <div
              className="innerLogo is-inview"
              data-scroll
              data-scroll-speed="1"
              data-scroll-data-pr-position="top"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="500.000000pt"
                height="500.000000pt"
                viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M2569 2788 c0 -102 -4 -165 -9 -153 -20 50 -100 95 -170 95 -53 0
-98 -19 -139 -61 l-33 -33 21 42 21 42 -70 0 -71 0 -43 -92 -44 -93 -42 93
-43 92 -114 0 c-90 0 -113 -3 -113 -14 0 -11 -8 -10 -37 5 -63 32 -142 22
-191 -24 l-24 -22 7 27 c6 25 4 27 -29 33 -48 9 -85 -1 -118 -33 l-28 -26 0
27 c0 26 -2 27 -60 27 l-60 0 0 -175 0 -175 60 0 60 0 0 95 c0 52 5 105 11
119 15 31 54 45 95 34 30 -8 31 -10 27 -52 -17 -148 136 -259 251 -181 34 23
36 23 36 5 0 -18 7 -20 60 -20 l59 0 3 137 3 137 73 -137 73 -137 42 0 42 0
68 130 c65 124 88 160 67 104 -16 -40 -12 -94 10 -140 55 -112 217 -139 316
-52 l34 30 0 -36 0 -36 60 0 60 0 2 218 3 217 60 -215 60 -215 72 -3 72 -3 20
68 c11 37 30 105 43 151 13 45 25 82 29 82 3 0 18 -44 33 -97 15 -54 34 -122
42 -151 l16 -53 71 3 72 3 72 255 c39 140 74 265 78 278 5 21 3 22 -64 22
l-70 0 -9 -32 c-5 -18 -26 -104 -47 -190 -22 -86 -41 -156 -43 -154 -2 3 -35
122 -93 339 -10 36 -11 37 -59 37 -38 0 -50 -4 -54 -17 -3 -10 -24 -90 -47
-178 -22 -88 -44 -166 -48 -172 -4 -7 -24 58 -45 145 -62 249 -48 222 -111
222 -42 0 -55 4 -55 15 0 12 -13 15 -60 15 l-60 0 -1 -172z m-121 -165 l14
-23 -66 0 c-36 0 -66 3 -66 7 0 3 8 15 17 25 23 26 81 21 101 -9z m-769 -8
c31 -16 41 -33 41 -74 0 -61 -62 -96 -118 -67 -60 31 -58 111 3 144 27 15 41
15 74 -3z m891 -125 l0 -40 -45 22 c-42 20 -45 21 -63 5 -11 -10 -35 -17 -60
-17 -32 0 -45 6 -61 26 -12 15 -21 31 -21 35 0 5 56 9 125 9 l125 0 0 -40z"
                  />
                  <path
                    d="M800 2875 l0 -55 65 0 65 0 0 -225 0 -225 65 0 65 0 0 225 0 225 70
0 70 0 0 55 0 55 -200 0 -200 0 0 -55z"
                  />
                  <path
                    d="M3483 2711 c-58 -27 -93 -88 -93 -166 0 -140 127 -225 245 -165 47
24 45 24 45 5 0 -12 13 -15 60 -15 l60 0 0 138 0 137 62 -109 61 -109 -56
-113 c-31 -63 -57 -117 -57 -120 0 -3 30 -4 67 -2 l68 3 73 140 c40 77 101
195 136 263 l64 122 -70 0 -69 0 -39 -85 c-21 -47 -41 -85 -44 -85 -3 0 -26
38 -51 85 l-47 85 -114 0 c-91 0 -114 -3 -114 -14 0 -11 -8 -10 -37 5 -47 24
-96 24 -150 0z m161 -103 c15 -13 29 -37 32 -55 5 -27 1 -37 -25 -64 -27 -26
-37 -30 -63 -25 -60 12 -90 63 -66 114 13 27 50 52 80 52 9 0 28 -10 42 -22z"
                  />
                  <path
                    d="M1058 2124 c-12 -11 -10 -82 2 -89 6 -4 10 7 10 24 0 43 27 41 33 -1
4 -32 4 -32 5 5 2 30 -1 37 -17 37 -11 0 -21 7 -23 16 -2 9 -6 12 -10 8z"
                  />
                  <path
                    d="M900 2086 c0 -7 10 -21 23 -30 l22 -17 -22 5 c-13 2 -23 0 -23 -5 0
-13 38 -11 46 2 4 7 -3 20 -16 29 -22 17 -23 18 -4 23 16 4 16 5 -3 6 -14 1
-23 -5 -23 -13z"
                  />
                  <path
                    d="M1223 2084 c-9 -25 11 -49 41 -50 23 -1 26 3 26 32 0 31 -3 34 -30
34 -19 0 -33 -6 -37 -16z m51 -3 c9 -14 -4 -41 -19 -41 -15 0 -28 27 -19 41 3
5 11 9 19 9 8 0 16 -4 19 -9z"
                  />
                  <path
                    d="M1401 2060 c1 -27 3 -29 6 -10 2 14 11 30 20 37 13 10 13 12 -6 10
-17 -1 -21 -7 -20 -37z"
                  />
                  <path
                    d="M1545 2080 c-4 -12 -1 -27 5 -35 14 -16 50 -20 50 -6 0 5 -9 7 -20 4
-11 -3 -20 0 -20 6 0 6 8 11 18 11 24 0 32 8 25 26 -8 22 -51 17 -58 -6z m45
0 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z"
                  />
                  <path
                    d="M1841 2072 c-1 -26 4 -35 19 -39 11 -3 17 -9 15 -14 -3 -4 -13 -5
-23 -2 -14 5 -15 4 -4 -8 22 -24 47 2 49 52 1 36 0 39 -5 14 -4 -17 -14 -30
-22 -30 -8 0 -18 13 -21 30 l-7 30 -1 -33z"
                  />
                  <path
                    d="M2010 2085 c-18 -22 -1 -50 31 -50 20 0 24 5 24 30 0 23 -5 31 -21
33 -11 2 -27 -4 -34 -13z m45 -20 c0 -28 -29 -25 -33 3 -3 19 0 23 15 20 10
-2 18 -12 18 -23z"
                  />
                  <path
                    d="M2180 2078 c0 -33 14 -51 36 -46 14 2 19 13 21 38 1 33 1 33 -5 6 -9
-38 -32 -47 -32 -12 0 13 -4 28 -10 31 -6 3 -10 -4 -10 -17z"
                  />
                  <path
                    d="M2351 2060 c1 -27 3 -29 6 -10 2 14 11 30 20 37 13 10 13 12 -6 10
-17 -1 -21 -7 -20 -37z"
                  />
                  <path
                    d="M2625 2080 c-4 -12 -1 -27 5 -35 14 -16 50 -20 50 -6 0 5 -9 7 -20 4
-11 -3 -20 0 -20 6 0 6 8 11 18 11 24 0 32 8 25 26 -8 22 -51 17 -58 -6z m45
0 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z"
                  />
                  <path
                    d="M2790 2093 c0 -7 5 -15 11 -19 8 -4 8 -9 0 -17 -6 -6 -11 -15 -11
-21 0 -6 5 -5 12 2 7 7 16 8 23 2 8 -6 11 1 11 25 0 24 -3 31 -11 25 -7 -6
-16 -5 -23 2 -9 9 -12 9 -12 1z"
                  />
                  <path
                    d="M2951 2048 c1 -29 4 -43 6 -32 3 15 10 20 22 17 23 -6 44 21 36 47
-4 14 -15 20 -36 20 -29 0 -29 -1 -28 -52z m52 30 c6 -19 -3 -38 -18 -38 -18
0 -28 17 -21 35 7 18 33 20 39 3z"
                  />
                  <path d="M3123 2065 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" />
                  <path
                    d="M3240 2064 c0 -21 4 -33 10 -29 6 3 10 17 10 30 0 14 7 25 18 28 10
3 6 5 -10 6 -26 1 -28 -2 -28 -35z"
                  />
                  <path d="M3393 2065 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" />
                  <path
                    d="M3514 2086 c-15 -38 22 -74 49 -47 7 7 4 8 -10 5 -12 -3 -24 -1 -27
5 -5 7 3 11 19 11 20 0 26 4 23 18 -4 22 -46 29 -54 8z m41 -6 c3 -5 -3 -10
-14 -10 -12 0 -21 5 -21 10 0 6 6 10 14 10 8 0 18 -4 21 -10z"
                  />
                  <path
                    d="M3681 2063 c1 -36 2 -37 8 -8 3 17 13 30 21 30 8 0 18 -13 22 -30 6
-29 6 -29 5 5 -2 30 -6 35 -29 38 -26 3 -28 1 -27 -35z"
                  />
                  <path
                    d="M3850 2086 c0 -7 10 -21 23 -30 l22 -17 -22 5 c-13 2 -23 0 -23 -5 0
-13 38 -11 46 2 4 7 -3 20 -16 29 -22 17 -23 18 -4 23 16 4 16 5 -3 6 -14 1
-23 -5 -23 -13z"
                  />
                  <path
                    d="M4005 2080 c-4 -12 -1 -27 5 -35 14 -16 50 -20 50 -6 0 5 -9 7 -20 4
-11 -3 -20 0 -20 6 0 6 8 11 18 11 24 0 32 8 25 26 -8 22 -51 17 -58 -6z m45
0 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="bottomContent">
            <div className="contentWrapper is-inview ">
              <div className="cols">
                <div className="col">
                  <div className="innerCol">
                    <div className="socials">
                      <a
                        href="https://github.com/Pinecone-aqua/travelway"
                        target="_blank"
                      >
                        <i>
                          <FiGithub />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col is-inview">
                  <div className="innerCol">
                    <p className="text-white">
                      Хэрвээ Та өөрийн амьдралдаа адал явдал түүхийг бичихийг
                      хүсвэл, сонирхолтой аялалд гарахыг хүсвэл манай блогийн
                      аяллын туршлага хэсгээс уншиж танилцаж болно.&nbsp;
                    </p>
                  </div>
                </div>
                <div
                  className="col is-inview"
                  data-scroll=""
                  data-scroll-speed="-1.5"
                  data-scroll-position="top"
                >
                  <div className="innerCol">
                    <p className="text-white">
                      Аялал гэдэг нь зөвхөн шинэ газруудаар зочлох төдийгүй
                      өөрийгөө нээх, өөр өөр соёл иргэншлээс суралцах, дэлхийн
                      өнцөг булан бүрд байгаа хүмүүстэй холбогдох явдал гэдэгт
                      бид итгэдэг.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
