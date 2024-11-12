import React from "react";
import Pict from "../asset/Profile-Bride.jpg";
import Image from "next/image";

export default function Bridge() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center space-y-6 bg-slate-950 relative"
      style={{
        backgroundImage: `url(${Pict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Centered Circular Image */}
      <div className="flex items-center justify-center z-10">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            src={Pict}
            alt="Profile Groom"
            layout="intrinsic"
            objectFit="cover"
            width={150}
            height={150}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Border Section with Groom Details */}
      <div className="border p-6 rounded-md text-center space-y-2 z-10 bg-gray-500 opacity-50">
        <h2 className="text-2xl font-bold">Syifa</h2>
        <p className="text-lg font-medium">Nurul Syifa Dheanira, S.E</p>

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
          Instagram Account Link
        </button>
      </div>
    </section>
  );
}
