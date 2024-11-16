import React from "react";
import Pict from "../../asset/IMG_1859.jpg";
import { useInView } from "../../hooks/useInView";

export default function Hero() {
  const { ref: rightToLeft, isInView: isRightToLeftInView } = useInView();

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
      <div className="flex flex-col items-center -rotate-90 border-white border-t-2 z-10 -ml-20">
        <h1 className="text-2xl font-semibold uppercase m-4">The Wedding Of</h1>
      </div>

      {/* Second div: horizontal alignment */}
      <div
        className={`z-10 border-y-2 border-l-2 border-white -ml-20 transition-transform duration-700 ${
          isRightToLeftInView ? "animate-slideLeft" : "opacity-0"
        }`}
        ref={rightToLeft}
      >
        {/* implement useInView "right to left here" */}
        <h1 className="text-6xl font-bold m-4">Syifa</h1>
        <h1 className="text-4xl font-medium my-3 text-center">&</h1>
        <h1 className="text-6xl font-bold m-4">Nabil</h1>
      </div>
    </section>
  );
}
