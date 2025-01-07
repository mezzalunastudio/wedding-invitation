import React from "react";
import Pict from "@/app/asset/Profile-Bride.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "../src/fonts";
import Image from "next/legacy/image";
import { wedding } from "@/app/utils/types";
import { Instagram } from "lucide-react";

export default function Bridge({ data }: { data: wedding }) {
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
          <h2 className={`text-2xl font-bold ${fonts.bodoni}`}>
            {data.bride.shortName}
          </h2>
          <p className={`text-lg font-medium ${fonts.montserrat}`}>
            {data.bride.fullNameWithTitle}
          </p>

          <div className={`text-sm mt-4 space-y-1 ${fonts.montserrat}`}>
            <p>
              <span className="font-semibold">Anak ke:</span>
              Putra pertama dari
            </p>
            <p>
              <span className="font-semibold">Orang tua:</span> Bpk.{" "}
              {data.bride.fatherName} & Ibu {data.bride.motherName}
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className={`btn flex items-center space-x-2 ${fonts.bodoni}`}
            >
              {/* edit sitek */}
              <a
                href={data.bride.instagram}
                target="_blank"
                className="flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>@{data.bride.shortName}</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
