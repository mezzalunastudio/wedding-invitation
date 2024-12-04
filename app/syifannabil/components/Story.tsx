import React from "react";
import Pict from "@/app/asset/IMG_1885.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "@/app/syifannabil/src/fonts";

export default function Story() {
  const { ref: headingRef, isInView: isheadingRef } = useInView();
  const { ref: storyRef, isInView: isstoryRef } = useInView();

  return (
    <section
      className="flex flex-col justify-center items-center text-center bg-slate-950 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${Pict.src})`,
      }}
      id="story"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div
        className={`text-center mt-12 z-10 ${
          isheadingRef ? "animate-slideLeft" : "opacity-0"
        }`}
        ref={headingRef}
      >
        <h1 className={`capitalize text-white ${fonts.bodoni}`}>
          Our Love Story
        </h1>
      </div>

      {/* Timeline Wrapper */}
      <div
        className={`relative max-w-6xl mx-auto px-4 space-y-4 z-10 my-12 ${
          isstoryRef ? "animate-slideRight" : "opacity-0"
        }`}
        ref={storyRef}
      >
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white"></div>

        {/* Timeline Events */}
        <div className="space-y-10">
          {/* First Meet */}
          <div className="flex items-center justify-start relative">
            <div className="w-3/4 md:w-1/2 px-8">
              <div className="p-2 border border-gray-300 rounded-md text-white md:space-y-4 space-y-2">
                <h3 className={`text-white ${fonts.bodoni}`}>First Meet</h3>
                <p
                  className={`text-gray-200 text-sm md:mx-4 ${fonts.montserrat}`}
                >
                  We met for the first time at a mutual friend’s gathering,
                  where we immediately connected over our shared interests and
                  love for adventure.
                </p>
              </div>
            </div>
          </div>

          {/* Proposal */}
          <div className="flex items-center justify-end relative">
            <div className="w-3/4 md:w-1/2 px-8">
              <div className="p-2 border border-gray-300 rounded-md text-white md:space-y-4 space-y-2">
                <h3 className={`text-white ${fonts.bodoni}`}>The Proposal</h3>
                <p
                  className={`text-gray-200 text-sm md:mx-4 ${fonts.montserrat}`}
                >
                  On a beautiful evening, under a sky full of stars, the
                  proposal took place with heartfelt words, promising a lifetime
                  of love and happiness together.
                </p>
              </div>
            </div>
          </div>

          {/* Marriage */}
          <div className="flex items-center justify-start relative">
            <div className="w-3/4 md:w-1/2 px-8">
              <div className="p-2 border border-gray-300 rounded-md text-white md:space-y-4 space-y-2">
                <h3 className={`text-white ${fonts.bodoni}`}>Marriage</h3>
                <p
                  className={`text-gray-200 text-sm md:mx-4 ${fonts.montserrat}`}
                >
                  Our journey led to a beautiful wedding day, surrounded by
                  family and friends, celebrating the beginning of a new chapter
                  in our love story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
