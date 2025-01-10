import React from "react";
import Image from "next/image";
import ProfilePic from "@/app/asset/IMG_1859.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "../src/fonts";
import { wedding } from "@/app/utils/types";

export default function Quote({ data }: { data: wedding }) {
  const { ref, isInView } = useInView();

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center space-y-8 text-center bg-slate-950 relative text-white"
      style={{
        backgroundImage: `url(${ProfilePic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="quote"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className={`z-20 ${isInView ? "animate-slideDown" : "opacity-0"}`}
        ref={ref}
      >
        {/* add animation from left to right */}
        <Image
          src={ProfilePic}
          alt="Picture of the author"
          width={300}
          height={300}
          className="rounded-[100px_20px_100px_20px] box-border"
        />
      </div>

      {/* Quote Text */}
      <div
        className={`z-20 px-6 max-w-3xl relative animate-slide-right ${
          isInView ? "animate-slideUp" : "opacity-0"
        }`}
        ref={ref}
      >
        <p className={`leading-7 [&:not(:first-child)]:mt-6 italic text-white ${fonts.montserrat}`}>
          {data.quotes.quote1}
        </p>
      </div>

      <div
        className={`z-20 pb-5 md:pb-10 ${
          isInView ? "animate-slideUp" : "opacity-0"
        }`}
        ref={ref}
      >
        {/* add animation from right to left */}
        <h4 className={`scroll-m-20 text-xl tracking-tight max-w-xl ${fonts.bodoni}`}>{data.quotes.quote1From}</h4>
      </div>
    </section>
  );
}
