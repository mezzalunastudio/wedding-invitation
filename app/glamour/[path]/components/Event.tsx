"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilPic from "../../../asset/IMG_1878.jpg";
import { fonts } from "../src/fonts";
import { wedding } from "@/app/utils/types";
import { MapPin, ArrowDownToLine, TvMinimalPlay } from "lucide-react";

export default function Event({ data }: { data: wedding }) {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-31T08:00:00Z").getTime();
    const currentDate = new Date().getTime();
    const timeLeft = eventDate - currentDate;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
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

      <div className={`text-center z-10`}>
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
          </div>
        </div>
      </div>

      <hr className="border-gray-300 w-1/2 mx-auto animate-fadeIn" />
      <div className={`text-center z-20`}>
        <div className="mb-8 space-y-2 mx-10">
          <p className={`text-2xl font-semibold ${fonts.bodoni}`}>Akad</p>
          <p className={`text-base ${fonts.montserrat}`}>{data.akad.date}</p>
          <p className={`text-base ${fonts.montserrat}`}>
            Jam: {data.akad.time} WIB
          </p>
          <p className={`text-base ${fonts.montserrat}`}>
            <span className="font-bold"> Kediaman Mempelai Wanita</span>
            {data.akad.place}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          {data && data.akad && data.akad.liveLink ? (
            <button
              className={`btn flex items-center space-x-2 ${fonts.montserrat}`}
              onClick={() => {
                if (data.akad.liveLink) {
                  window.location.href = data.akad.liveLink;
                }
              }}
            >
              <TvMinimalPlay />
              <span>Watch the Live Wedding</span>
            </button>
          ) : null}
        </div>
      </div>

      <hr className="md:my-4 my-2 border-gray-300 w-1/2 mx-auto animate-fadeIn" />
      <div className={`text-center z-20`}>
        <div className="mb-8 space-y-2 mx-10">
          <p className={`text-2xl font-semibold ${fonts.bodoni}`}>Resepsi</p>
          <p className={`text-base ${fonts.montserrat}`}>{data.resepsi.date}</p>
          <p className={`text-base ${fonts.montserrat}`}>
            Jam: {data.resepsi.time} WIB
          </p>
          <p className={`text-base ${fonts.montserrat}`}>
            <span className="font-bold"> Kediaman Mempelai Wanita</span>
            {data.resepsi.place}
          </p>
        </div>
      </div>
      <hr className="md:my-4 my-2 border-gray-300 w-1/2 mx-auto animate-fadeIn" />

      <div className={`flex justify-center space-x-6 z-20 px-3 pb-4 md:pb-6`}>
        {/* Google Maps Button */}
        <div>
          {data && data.akad && data.resepsi.mapsLink ? (
            <button
              className={`btn flex items-center space-x-2 ${fonts.montserrat}`}
              onClick={() => {
                if (data.resepsi.mapsLink) {
                  window.location.href = data.resepsi.mapsLink;
                }
              }}
            >
              <MapPin className="w-5 h-5" />
              <span>Google Maps</span>
            </button>
          ) : null}
        </div>

        {/* Save the Date Button */}
        <div>
          <button
            className={`btn flex items-center space-x-2 ${fonts.montserrat}`}
            onClick={() => alert("Saved!")}
          >
            <ArrowDownToLine className="w-5 h-5" />
            <span>Save the Date</span>
          </button>
        </div>
      </div>
    </section>
  );
}
