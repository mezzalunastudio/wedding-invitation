import React from "react";
import bgPict from "../../asset/IMG_1885.jpg";
import frontPic from "../../asset/Foto-Profile-paling-depan.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="flex flex-col justify-center items-center space-y-8 text-center bg-slate-950 relative"
      style={{
        backgroundImage: `url(${bgPict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {/* Second Layer: Content Container */}
      <div className="relative z-10 w-3/4 mx-auto py-12 text-center text-white">
        {/* Third Layer: Text and Image */}
        <p className="text-lg mb-4">
          Kedatangan dan restu kalian hadiah terindah bagi kami
        </p>
        <h1 className="text-3xl font-semibold mb-6">Syifa & Nabil</h1>

        {/* Front Image */}
        <div className="mb-6">
          <Image
            src={frontPic}
            alt="Profile Picture"
            width={350}
            height={200}
            className="mx-auto rounded-sm"
          />
        </div>

        {/* Footer Template Info */}
        <span className="text-sm font-extrabold">Template by Mezzaluna</span>
      </div>
    </footer>
  );
}
