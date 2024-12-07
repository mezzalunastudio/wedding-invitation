import React from "react";
import Pict from "@/app/asset/IMG_1859.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "../src/fonts";
import { wedding } from "@/app/utils/types";

export default function Hero({ data }: { data: wedding }) {
  const { ref, isInView } = useInView();

  return (
    <section
      className="h-screen flex flex-row justify-center items-center center bg-slate-900 relative"
      style={{
        backgroundImage: `url(${Pict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="hero"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* First div: vertical alignment */}
      <div
        className={`flex flex-col items-center -rotate-90 border-white border-t-2 z-10 -ml-20 ${
          isInView ? "animate-fadeIn" : "opacity-0"
        }`}
        ref={ref}
      >
        <h4
          ref={ref}
          className={`uppercase md:mx-5 my-2 mx-4 ${fonts.montserrat} `}
        >
          The Wedding Of
        </h4>
      </div>

      {/* Second div: horizontal alignment */}
      <div
        className={`z-10 border-y-2 border-l-2 border-white -ml-20 transition-transform duration-700 ${
          fonts.bodoni
        } ${isInView ? "animate-slideRight" : "opacity-0"}`}
        ref={ref}
      >
        {/* implement useInView "right to left here" */}
        <h1 className={`text-6xl m-4`}>{data.groom.shortName}</h1>
        <h1 className="text-4xl my-3 text-center">&</h1>
        <h1 className="text-6xl m-4">{data.bride.shortName}</h1>
      </div>
    </section>
  );
}
