"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilPic from "../../asset/IMG_1878.jpg";
// import { useInView } from "@/app/hooks/useInView";
import { fonts } from "@/app/syifannabil/src/fonts";

export default function Rsvp() {
  // const { ref, isInView } = useInView();

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
      id="rsvp"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div
        className={`text-center z-10`}
        // ref={ref}
      >
        <hr className="md:my-4 my-2 border-gray-300 w-1/2 mx-auto animate-fadeIn" />
        <Image
          src={ProfilPic}
          alt="Wedding"
          width={400}
          height={300}
          className={`mx-auto`}
        />
        {/* Countdown Timer */}
        <div className={`mt-6 text-xl font-semibold `}>
          <p className={`text-lg ${fonts.bodoni}`}>Wedding Countdown</p>
          <div
            className={`flex justify-center space-x-4 mt-4 ${fonts.montserrat}`}
          >
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
      </div>

      <hr className="md:my-4 my-2 border-gray-300 w-1/2 mx-auto animate-fadeIn" />
      <div className={`text-center z-20`}>
        {/* ${
          isInView ? "animate-slideUp opacity-100" : "opacity-0"
        } */}
        <div className="mb-8 space-y-2">
          <p className={`text-2xl font-semibold ${fonts.bodoni}`}>Akad</p>
          <p className={`text-base ${fonts.montserrat}`}>
            Minggu, 01 April 2024
          </p>
          <p className={`text-base ${fonts.montserrat}`}>Jam: 08.00 WIB</p>
          <p className={`text-base ${fonts.montserrat}`}>
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
            className={`btn ${fonts.montserrat}`}
            onClick={() =>
              (window.location.href = "https://live-wedding-link.com")
            }
          >
            Watch the Live Wedding
          </button>
        </div>
      </div>

      <hr className="md:my-4 my-2 border-gray-300 w-1/2 mx-auto animate-fadeIn" />
      <div className={`text-center z-20`}>
        <div className="space-y-2">
          <p className={`text-2xl font-semibold ${fonts.bodoni}`}>Resepsi</p>
          <p className={`text-base ${fonts.montserrat}`}>
            Minggu, 01 April 2024
          </p>
          <p className={`text-base ${fonts.montserrat}`}>Jam: 08.00 WIB</p>
          <p className={`text-base ${fonts.montserrat}`}>
            <span className="font-bold"> Kediaman Mempelai Wanita</span>
            <br />
            Perumahan Graha Prima Blok IE RT
            <br />
            01 RW 10, Desa Satria Jaya, Tambun Utara - Bekasi
          </p>
        </div>
      </div>
      <hr className="md:my-4 my-2 border-gray-300 w-1/2 mx-auto animate-fadeIn" />

      <div
        className={`flex justify-center space-x-6 z-20 px-3 pb-4 md:pb-6`}
        // ref={ref}
      >
        {/* Google Maps Button */}
        <div>
          <button
            className={`btn ${fonts.montserrat}`}
            onClick={() =>
              window.open("https://maps.app.goo.gl/SxXsB57nspUobZdJ7", "_blank")
            }
          >
            Google Maps Location
          </button>
        </div>

        {/* Save the Date Button */}
        <div>
          <button
            className={`btn ${fonts.montserrat}`}
            onClick={() => alert("Saved!")}
          >
            Save the Date
          </button>
        </div>
      </div>
    </section>
  );
}
