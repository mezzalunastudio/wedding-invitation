"use client";
import React, { useState } from "react";
import bgPict from "@/app/asset/IMG_1890.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "../src/fonts";
import { wedding } from "@/app/utils/types";
import { CreditCard } from "lucide-react";

export default function Gift({ data }: { data: wedding }) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, isInView } = useInView();

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
          isInView ? "animate-slideDown" : "opacity-0"
        }`}
        ref={ref}
      >
        <h1 className={`capitalize mb-4 ${fonts.bodoni}`}>Wedding Love Gift</h1>
        <p className={`text-sm md:text-lg ${fonts.montserrat}`}>
          Apabila tamu ingin mengirimkan hadiah kepada kedua mempelai dapat
          melalui rekening atau virtual account dibawah ini
        </p>
      </div>

      <div
        className={`text-center z-10 ${
          isInView ? "animate-fadeIn" : "opacity-0"
        }`}
        ref={ref}
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
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-4/5 md:w-4/6 mx-auto z-10 `}
        >
          <div
            ref={ref}
            className={`md:p-6 p-4 border border-gray-300 flex items-center text-left justify-between rounded-md ${
              isInView ? "animate-slideRight" : "opacity-0"
            }`}
          >
            <div className={`${fonts.montserrat}`}>
              <p className="text-lg">{data.groom.fullName}</p>
              <p className="text-xl">{data.groom.noRek}</p>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <p className={`text-base mb-3 ${fonts.bodoni}`}>
                {data.bride.bank} BCA
              </p>
              <button
                className={`btn flex items-center space-x-2 ${fonts.montserrat}`}
                onClick={() => {
                  if (data.bride.noRek) {
                    copyToClipboard(data.bride.noRek);
                  }
                }}
              >
                <CreditCard className="w-4 h-4" />
                <span>Copy Rekening</span>
              </button>
            </div>
          </div>
          <div
            ref={ref}
            className={`md:p-6 p-4 border border-gray-300 flex items-center text-left justify-between rounded-md ${
              isInView ? "animate-slideLeft" : "opacity-0"
            }`}
          >
            <div className={`${fonts.montserrat}`}>
              <p className="text-lg">{data.bride.fullName}</p>
              <p className="text-xl">{data.bride.noRek}</p>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <p className={`text-base mb-3 ${fonts.bodoni}`}>
                {data.bride.bank} BCA
              </p>
              <button
                className={`btn flex items-center space-x-2 ${fonts.montserrat}`}
                onClick={() => {
                  if (data.bride.noRek) {
                    copyToClipboard(data.bride.noRek);
                  }
                }}
              >
                <CreditCard className="w-4 h-4" />
                <span>Copy Rekening</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
