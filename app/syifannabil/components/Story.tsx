import React from "react";
import Pict from "../../asset/IMG_1885.jpg";

export default function Story() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center bg-slate-950 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${Pict.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Title */}
      <div className="text-center my-12 z-10">
        <h1 className="text-4xl font-semibold capitalize text-white">
          Our Love Story
        </h1>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-6xl mx-auto px-4 space-y-20 z-10 my-12">
        {/* Central Line with Heart Icons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white">
          <div className="flex flex-col items-center space-y-12"></div>
        </div>

        {/* Timeline Events */}
        <div className="space-y-24">
          {/* First Meet */}
          <div className="flex items-center justify-start relative">
            <div className="w-1/2 pr-8">
              <div className="p-6 rounded-lg border border-gray-300 text-white shadow-lg space-y-2">
                <h2 className="text-2xl font-bold text-white">First Meet</h2>
                <p className="text-gray-200">
                  We met for the first time at a mutual friend’s gathering,
                  where we immediately connected over our shared interests and
                  love for adventure.
                </p>
              </div>
            </div>
          </div>

          {/* Proposal */}
          <div className="flex items-center justify-end relative">
            <div className="w-1/2 pl-8">
              <div className="p-6 rounded-lg border border-gray-300 text-white shadow-lg space-y-2">
                <h2 className="text-2xl font-bold text-white">The Proposal</h2>
                <p className="text-gray-200">
                  On a beautiful evening, under a sky full of stars, the
                  proposal took place with heartfelt words, promising a lifetime
                  of love and happiness together.
                </p>
              </div>
            </div>
          </div>

          {/* Marriage */}
          <div className="flex items-center justify-start relative">
            <div className="w-1/2 pr-8">
              <div className="p-6 rounded-lg border border-gray-300 text-white shadow-lg space-y-2">
                <h2 className="text-2xl font-bold text-white">Marriage</h2>
                <p className="text-gray-200">
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
