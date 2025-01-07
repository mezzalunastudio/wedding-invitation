"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilPic from "../../asset/IMG_1878.jpg";
import { fonts } from "./src/fonts";
// import { wedding } from "@/app/utils/types";
import { MapPin, ArrowDownToLine, TvMinimalPlay } from "lucide-react";
import { Button } from "@/components/ui/button";

// export default function Event({ data }: { data: wedding }) {
export default function Event() {
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
      className="flex flex-col justify-center items-center space-y-8 text-center text-white bg-slate-950 relative"
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
          <p className={`leading-7 [&:not(:first-child)]:mt-6 ${fonts.bodoni}`}>
            Wedding Countdown
          </p>
          <div
            className={`flex justify-center space-x-4 mt-4 ${fonts.montserrat}`}
          >
            <div className="flex flex-col items-center">
              <span className="leading-7 [&:not(:first-child)]:mt-1">
                {timeLeft.days}
              </span>
              <span className="leading-7 [&:not(:first-child)]:mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="leading-7 [&:not(:first-child)]:mt-1">
                {timeLeft.hours}
              </span>
              <span className="leading-7 [&:not(:first-child)]:mt-1">
                Hours
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="leading-7 [&:not(:first-child)]:mt-1">
                {timeLeft.minutes}
              </span>
              <span className="leading-7 [&:not(:first-child)]:mt-1">
                Minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 w-1/2 mx-auto animate-fadeIn" />
      <div className={`text-center z-20`}>
        <div className="mb-8 space-y-2 mx-10">
          <h3
            className={`scroll-m-20 text-2xl font-semibold tracking-tight ${fonts.bodoni}`}
          >
            Akad
          </h3>
          <p
            className={`leading-7 [&:not(:first-child)]:mt-6 ${fonts.montserrat}`}
          >
            31 Desember 2025
          </p>
          <p
            className={`leading-7 [&:not(:first-child)]:mt-6 ${fonts.montserrat}`}
          >
            Jam: 08:00 WIB
          </p>
          <p
            className={`leading-7 [&:not(:first-child)]:mt-6 ${fonts.montserrat}`}
          >
            <span className="font-bold"> Kediaman Mempelai Wanita</span> <br />
            Semarang, Jawa Tengah
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Button
            variant="outline"
            className={`bg-transparent ${fonts.montserrat}`}
            onClick={() => {
              window.location.href = "#";
            }}
          >
            <TvMinimalPlay />
            <span>Watch the Live Wedding</span>
          </Button>
        </div>
      </div>

      <hr className="md:my-4 my-2 border-gray-300 w-1/2 mx-auto animate-fadeIn" />
      <div className={`text-center z-20`}>
        <div className="mb-8 space-y-2 mx-10">
          <p className={`text-2xl font-semibold ${fonts.bodoni}`}>Resepsi</p>
          <p className={`text-base ${fonts.montserrat}`}>21 Desember 2025</p>
          <p className={`text-base ${fonts.montserrat}`}>Jam: 08.00 WIB</p>
          <p className={`text-base ${fonts.montserrat}`}>
            <span className="font-bold"> Kediaman Mempelai Wanita</span> <br />
            Semarang, Jawa Tengah
          </p>
        </div>
      </div>
      <hr className="md:my-4 my-2 border-gray-300 w-1/2 mx-auto animate-fadeIn" />

      <div className={`flex justify-center space-x-6 z-20 px-3 pb-4 md:pb-6`}>
        {/* Google Maps Button */}
        <div>
          <Button
            variant="outline"
            className={`bg-transparent ${fonts.montserrat}`}
            onClick={() => {
              window.location.href = "#";
            }}
          >
            <MapPin className="w-5 h-5" />
            <span>Google Maps</span>
          </Button>
        </div>

        {/* Save the Date Button */}
        <div>
          <Button
            variant="outline"
            className={`bg-transparent ${fonts.montserrat}`}
            onClick={() => alert("Saved!")}
          >
            <ArrowDownToLine className="w-5 h-5" />
            <span>Save the Date</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
