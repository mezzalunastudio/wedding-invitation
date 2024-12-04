"use client";
import React, { useState } from "react";
import bgPict from "@/app/asset/IMG_1890.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "@/app/syifannabil/src/fonts";

export default function Gift() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: isHeadingRef, isInView: setIsHeadingRef } = useInView();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Number copied to clipboard!");
  };

  return (
    <section
      className=" relative flex flex-col justify-center items-center space-y-8 text-center min-h-screen"
      style={{
        backgroundImage: `url(${bgPict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="gift"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div
        className={`text-center mb-8 p-4 z-10 md:w-1/2 w-4/5 ${
          setIsHeadingRef ? "animate-fadeIn" : "opacity-0"
        }`}
        ref={isHeadingRef}
      >
        <h1 className={`capitalize mb-4 ${fonts.bodoni}`}>Wedding Love Gift</h1>
        <p className={`text-sm md:text-lg ${fonts.montserrat}`}>
          Apabila tamu ingin mengirimkan hadiah kepada kedua mempelai dapat
          melalui rekening atau virtual account dibawah ini
        </p>
      </div>

      <div
        className={`text-center z-10 ${
          setIsHeadingRef ? "animate-fadeIn" : "opacity-0"
        }`}
        ref={isHeadingRef}
      >
        <button
          className={`btn ${fonts.montserrat}`}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide Gift Info" : "Show Gift Info"}
        </button>
      </div>

      {isVisible && (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-4/5 md:w-4/6 mx-auto z-10 ${
            setIsHeadingRef ? "animate-fadeIn" : "opacity-0"
          }`}
          ref={isHeadingRef}
        >
          <div
            className={`md:p-6 p-4 border border-gray-300 flex items-center text-left justify-between rounded-md`}
          >
            <div className={`${fonts.montserrat}`}>
              <p className="text-lg">Nomor Rekening</p>
              <p className="text-xl">123-456-7890</p>
              <p className={`text-base ${fonts.bodoni}`}>Bank ABC</p>
            </div>

            <div>
              <button
                className={`btn ${fonts.montserrat}`}
                onClick={() => copyToClipboard("123-456-7890")}
              >
                Copy Rekening
              </button>
            </div>
          </div>
          <div
            className={`md:p-6 p-4 border border-gray-300 flex items-center text-left justify-between rounded-md`}
          >
            <div className={`${fonts.montserrat}`}>
              <p className="text-lg">Nomor Rekening</p>
              <p className="text-xl">123-456-7890</p>
              <p className={`text-base ${fonts.bodoni}`}>Bank ABC</p>
            </div>

            <div>
              <button
                className={`btn ${fonts.montserrat}`}
                onClick={() => copyToClipboard("123-456-7890")}
              >
                Copy Rekening
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
