import Link from "next/link";
import { useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { TravelType } from "../../../util/types";
import React, { ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

export default function TravelCard(props: { data: TravelType }): JSX.Element {
  const data = props.data;
  const [like, setLike] = useState(false);

  return (
    <div className="contaiverSlider">
      <ParallaxText baseVelocity={-5}>
        {/* <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText> */}
        <div className="w-64 h-96 rounded-2xl border-dashed-l bg-cyan-200 m-5 relative shadow-2xl shadow-slate-500  overflow-hidden">
          <Link href={`travels/${data._id}`}>
            <picture>
              <img
                src={data.image}
                className="w-full rounded-2xl h-96"
                alt=""
              />
            </picture>
          </Link>
          <div className="flex justify-between absolute bottom-0 bg-cover bg-gray-500 h-24 w-full bg-center text-white bg-opacity-50 rounded-b-2xl">
            <div className="p-3">{data.title}</div>
            <button onClick={() => setLike((prev) => !prev)} className="p-4">
              {like === true ? (
                <BsFillArrowThroughHeartFill size={30} />
              ) : (
                <AiOutlineHeart size={30} />
              )}
            </button>
          </div>
        </div>
      </ParallaxText>
    </div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
