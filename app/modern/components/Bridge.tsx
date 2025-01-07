"use client";

import React from "react";
import Pict from "@/app/asset/Profile-Bride.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "./src/fonts";
import Image from "next/legacy/image";
// import { wedding } from "@/app/utils/types";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// export default function Bridge({ data }: { data: wedding }) {
export default function Bridge() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="h-screen flex flex-col justify-center items-center space-y-6 bg-slate-950 relative"
      style={{
        backgroundImage: `url(${Pict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="bridge"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Centered Circular Image */}
      <div className="flex items-center justify-center z-20">
        <div
          ref={ref}
          className={`w-40 h-40 rounded-full overflow-hidden transition-transform duration-700 ${
            isInView ? "animate-slideUp" : "opacity-0"
          }`}
        >
          {" "}
          <Image
            src={Pict}
            alt="Profile Groom"
            // layout="intrinsic"
            objectFit="cover"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Border Section with Groom Details */}
      <div
        ref={ref}
        className={`z-20 relative w-2/3 sm:w-1/3 p-6 text-center transition-transform duration-700 ${
          isInView ? "animate-slideDown" : "opacity-0"
        }`}
      >
        {/* Background with opacity */}
        <div className="absolute inset-0 bg-gray-500 opacity-70 rounded-md"></div>
        {/* Content */}
        <div className="relative z-10 space-y-4 text-white">
          <h2
            className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${fonts.bodoni}`}
          >
            Felicia Stephanie
          </h2>
          <p
            className={`leading-7 [&:not(:first-child)]:mt-6 ${fonts.montserrat}`}
          >
            Felicia Stephanie
          </p>

          <div className={`text-sm mt-4 space-y-1 ${fonts.montserrat}`}>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <span className="font-semibold">Anak ke: 2</span>{" "}
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <span className="font-semibold">Orang tua: Bpk.</span> Jonathan
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className={` bg-transparent ${fonts.bodoni}`}
            >
              {/* edit sitek */}
              <a
                href="#"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>@</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
