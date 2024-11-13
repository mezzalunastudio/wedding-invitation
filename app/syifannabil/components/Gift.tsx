"use client";
import React, { useState } from "react";
import bgPict from "../../asset/IMG_1890.jpg";

export default function Gift() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to copy text to clipboard
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
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="text-center mb-8 z-10">
        <h1 className="text-3xl font-semibold">WEDDING LOVE GIFT</h1>
        <span className="text-base">
          Apabila tamu ingin mengirimkan hadiah kepada kedua mempelai dapat
          melalui rekening atau virtual account dibawah ini
        </span>
      </div>

      {/* Button to toggle the visibility of the gift info */}
      <div className="text-center z-10">
        <button
          className="text-white border border-transparent border-white transition py-3 px-6 hover:opacity-80"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide Gift Info" : "Show Gift Info"}
        </button>
      </div>

      {/* Display gift information if isVisible is true */}
      {isVisible && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 w-3/4 mx-auto z-10 mb-12">
          {" "}
          {/* Added mb-12 for bottom margin */}
          {/* Left box */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg flex items-center justify-between">
            {/* Left side: Content */}
            <div>
              <p className="text-lg font-semibold">Nomor Rekening</p>
              <p className="text-xl font-bold">123-456-7890</p>
              <p className="text-base">Bank: Bank ABC</p>
            </div>

            {/* Right side: Button */}
            <div>
              <button
                className="text-white border border-transparent border-white transition py-3 px-4 hover:opacity-80"
                onClick={() => copyToClipboard("123-456-7890")}
              >
                Copy Rekening
              </button>
            </div>
          </div>
          {/* Right box */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg flex items-center justify-between">
            {/* Left side: Content */}
            <div>
              <p className="text-lg font-semibold">Nomor Rekening</p>
              <p className="text-xl font-bold">123-456-7890</p>
              <p className="text-base">Bank: Bank ABC</p>
            </div>

            {/* Right side: Button */}
            <div>
              <button
                className="text-white border border-transparent border-white transition py-3 px-4 hover:opacity-80"
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
