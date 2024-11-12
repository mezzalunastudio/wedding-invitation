"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilPic from "../asset/IMG_1878.jpg";

export default function Rsvp() {
  // Countdown Timer Logic
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-31T08:00:00Z").getTime();
    const currentDate = new Date().getTime();
    const timeLeft = eventDate - currentDate;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="flex flex-col justify-center items-center space-y-8 text-center bg-slate-950 relative"
      style={{
        backgroundImage: `url(${ProfilPic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="text-center z-10">
        <hr className="my-8 border-gray-300 w-1/2 mx-auto" />
        <Image
          src={ProfilPic}
          alt="Wedding"
          width={400}
          height={300}
          className="mx-auto rounded-lg"
        />

        {/* Countdown Timer */}
        <div className="mt-6 text-xl font-semibold">
          <p className="text-lg">Wedding Countdown</p>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl">{timeLeft.days}</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{timeLeft.hours}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{timeLeft.minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{timeLeft.seconds}</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-8 border-gray-300 w-1/2 mx-auto" />
      </div>

      <div className="text-center mt-8 z-20">
        {/* Wedding Information */}
        <div className="mb-8 space-y-2">
          <p className="text-2xl font-semibold">Akad</p>
          <p className="text-base">Minggu, 01 April 2024</p>
          <p className="text-base">Jam: 08.00 WIB</p>
          <p className="text-base">
            <span className="font-bold"> Kediaman Mempelai Wanita</span>
            <br />
            Perumahan Graha Prima Blok IE RT
            <br />
            01 RW 10, Desa Satria Jaya, Tambun Utara - Bekasi
          </p>
        </div>

        {/* Button for Live Wedding */}
        <div className="mt-4">
          <button
            className="text-white border border-transparent border-white transition py-3 px-6"
            onClick={() =>
              (window.location.href = "https://live-wedding-link.com")
            } // Replace with actual live wedding link
          >
            Watch the Live Wedding
          </button>
        </div>
        <hr className="my-8 border-gray-300 w-1/2 mx-auto" />
      </div>

      <div className="text-center mt-8 z-20">
        {/* Wedding Information */}
        <div className="mb-8 space-y-2">
          <p className="text-2xl font-semibold">Resepsi</p>
          <p className="text-base">Minggu, 01 April 2024</p>
          <p className="text-base">Jam: 08.00 WIB</p>
          <p className="text-base">
            <span className="font-bold"> Kediaman Mempelai Wanita</span>
            <br />
            Perumahan Graha Prima Blok IE RT
            <br />
            01 RW 10, Desa Satria Jaya, Tambun Utara - Bekasi
          </p>
        </div>

        <hr className="my-8 border-gray-300 w-1/2 mx-auto" />
      </div>

      <div className="flex justify-center mt-12 space-x-6 z-20 pb-10">
        {/* Google Maps Button */}
        <div>
          <button
            className="text-white border border-transparent border-white transition py-3 px-6"
            onClick={() =>
              window.open("https://maps.app.goo.gl/SxXsB57nspUobZdJ7", "_blank")
            } // Replace with the actual map link
          >
            Google Maps Location
          </button>
        </div>

        {/* Save the Date Button */}
        <div>
          <button
            className="text-white border border-transparent border-white transition py-3 px-6"
            onClick={() => alert("Saved!")} // Here, you can implement actual Save the Date functionality
          >
            Save the Date
          </button>
        </div>
      </div>
    </section>
  );
}
