import React from "react";
import Pict from "../../asset/Profile-Groom.jpg";
import Image from "next/legacy/image";

export default function Groom() {
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
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            src={Pict}
            alt="Profile Groom"
            // layout="intrinsic"
            objectFit="cover"
            width={200}
            height={200}
            // className="w-full h-full"
            // fill
          />
        </div>
      </div>

      {/* Border Section with Groom Details */}
      <div className="relative w-2/3 sm:w-1/3 p-6 text-center">
        {/* Background with opacity */}
        <div className="absolute inset-0 bg-gray-500 opacity-70 rounded-md"></div>

        {/* Content */}
        <div className="relative z-10 space-y-4 text-white">
          <h2 className="text-2xl font-bold">Nabil</h2>
          <p className="text-lg font-medium">
            Ngakan Made Nabil Akmal, S.T., MBA
          </p>

          <div className="text-sm mt-4 space-y-1">
            <p>
              <span className="font-semibold">Anak ke:</span> Putra pertama dari
            </p>
            <p>
              <span className="font-semibold">Orang tua:</span> Bpk. Nabil & Ibu
              Nabil
            </p>
          </div>

          <button className="mt-4 px-4 py-2 border rounded-md text-sm">
            <a href="https://instagram.com" target="_blank">
              @nabil
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
