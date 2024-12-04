import React from "react";
import Pict from "@/app/asset/Profile-Groom.jpg";
import Image from "next/legacy/image";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "@/app/syifannabil/src/fonts";

export default function Groom() {
  const { ref: imageRef, isInView: isImageInView } = useInView();
  const { ref: detailsRef, isInView: isDetailsInView } = useInView();

  return (
    <section
      className="h-screen flex flex-col justify-center items-center space-y-6 bg-slate-950 relative"
      style={{
        backgroundImage: `url(${Pict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="groom"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Centered Circular Image */}
      <div className="flex items-center justify-center z-10">
        <div
          ref={imageRef}
          className={`w-40 h-40 rounded-full overflow-hidden transition-transform duration-700 ${
            isImageInView ? "animate-slideRight" : "opacity-0"
          }`}
        >
          {/* animate rightleft */}
          <Image
            src={Pict}
            alt="Profile Groom"
            objectFit="cover"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div
        ref={detailsRef}
        className={`relative w-2/3 sm:w-1/3 p-6 text-center transition-transform duration-700 ${
          isDetailsInView ? "animate-slideLeft" : "opacity-0"
        }`}
      >
        {/* animate letftright */}
        <div className="absolute inset-0 bg-gray-500 opacity-70 rounded-md"></div>
        {/* Content */}
        <div className="relative z-10 space-y-4 text-white">
          <h2 className={`text-2xl font-bold ${fonts.bodoni}`}>Nabil</h2>
          <p className={`text-lg font-medium ${fonts.montserrat}`}>
            Ngakan Made Nabil Akmal, S.T., MBA
          </p>

          <div className={`text-sm mt-4 space-y-1 ${fonts.montserrat}`}>
            <p>
              <span className="font-semibold">Anak ke:</span> Putra pertama dari
            </p>
            <p>
              <span className="font-semibold">Orang tua:</span> Bpk. Nabil & Ibu
              Nabil
            </p>
          </div>

          <button className={`btn ${fonts.bodoni}`}>
            <a href="https://instagram.com" target="_blank">
              @nabil
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
