import React from "react";
import Pict from "@/app/asset/IMG_1885.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "@/app/syifannabil/src/fonts";
interface TimelineEvent {
  title: string;
  description: string;
  position: "left" | "right"; // To determine layout
}

const timelineData: TimelineEvent[] = [
  {
    title: "First Meet",
    description:
      "We met for the first time at a mutual friend’s gathering, where we immediately connected over our shared interests and love for adventure.",
    position: "left",
  },
  {
    title: "The Proposal",
    description:
      "On a beautiful evening, under a sky full of stars, the proposal took place with heartfelt words, promising a lifetime of love and happiness together.",
    position: "right",
  },
  {
    title: "Marriage",
    description:
      "Our journey led to a beautiful wedding day, surrounded by family and friends, celebrating the beginning of a new chapter in our love story.",
    position: "left",
  },
];

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
        className={`text-center my-12 z-10  ${
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
        className={`relative max-w-6xl mx-auto px-4 space-y-20 z-10 my-12 ${
          isstoryRef ? "animate-slideRight" : "opacity-0"
        }`}
        ref={storyRef}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white"></div>

        {/* Render Timeline Events */}
        <div className="space-y-10">
          {timelineData.map((event, index) => (
            <div
              key={index}
              className={`flex items-center justify-${
                event.position === "left" ? "start" : "end"
              } relative`}
            >
              <div
                className={`w-1/2 ${
                  event.position === "left" ? "pr-8" : "pl-8"
                }`}
              >
                <div className="p-2 border border-gray-300 rounded-md text-white md:space-y-4 space-y-2">
                  <h3 className={`text-white ${fonts.bodoni}`}>
                    {event.title}
                  </h3>
                  <p
                    className={`text-gray-200 text-sm md:mx-4 ${fonts.montserrat}`}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
