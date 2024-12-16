"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "../src/fonts";
import { wedding } from "@/app/utils/types";
import { Mail, MailOpen } from "lucide-react";
import { getWeddingImage } from "@/app/utils/apihelper";

export default function BukaUndangan({
  data,
  onUnlock,
}: {
  data: wedding;
  onUnlock: () => void;
}) {
  const { ref, isInView } = useInView();
  const [isHovered, setIsHovered] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleFullScreen = () => {
    const element = document.documentElement; // Target the entire document
    if (element.requestFullscreen) {
      element.requestFullscreen(); // Trigger fullscreen mode
      // } else if (element.webkitRequestFullscreen) {
      //   element.webkitRequestFullscreen(); // Support for Safari
      // } else if (element.msRequestFullscreen) {
      //   element.msRequestFullscreen(); // Support for IE/Edge
      // }
    }

    onUnlock(); // Call the provided unlock function
  };

  useEffect(() => {
    const fetchImage = async () => {
      if (data) {
        try {
          const imageUrl = await getWeddingImage(
            data.category,
            data.path,
            data.imageUrl.groomImg
          );
          setImage(imageUrl);
        } catch (error) {
          console.error("Error fetching image:", error);
          setImage(null);
        }
      }
    };

    fetchImage();
  }, [data]);

  return (
    <section
      className={`relative h-screen text-center bg-slate-950`}
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundImage: image ? `url('${image}')` : "none", // Wrap the image in url()
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="header"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-between h-full py-10 md:py-20">
        {/* Top Section */}
        <div className={`transition-transform duration-700`}>
          <p
            ref={ref}
            className={`text-xl text-white ${fonts.montserrat} ${
              isInView ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            The wedding of
          </p>
          <h1
            className={`mt-4 text-4xl md:text-6xl text-white font-bold ${
              fonts.bodoni
            } ${isInView ? "animate-slideDown" : "opacity-0"}`}
            ref={ref}
            style={{
              transform: isInView ? "translateY(0)" : "translateY(50px)",
            }}
          >
            {data.groom.shortName} & {data.bride.shortName}
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center transition-transform duration-700">
          <p
            ref={ref}
            className={`text-white text-lg ${
              isInView ? "animate-slideUp" : "opacity-0"
            }`}
          >
            Kepada Yth.
          </p>
          <p
            ref={ref}
            className={`text-white text-lg ${
              isInView ? "animate-slideDown" : "opacity-0"
            }`}
          >
            Bapak/Ibu/Saudara/i :
          </p>
          <div
            className={`mt-6 ${isInView ? "animate-slideUp" : "opacity-0"}`}
            ref={ref}
          >
            <button
              className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition flex items-center justify-center gap-2"
              onClick={handleFullScreen}
              onMouseEnter={() => setIsHovered(true)} // Set hover state to true
              onMouseLeave={() => setIsHovered(false)} // Reset hover state
            >
              {isHovered ? (
                <MailOpen className="w-5 h-5 text-gray-500 transition-transform duration-200" />
              ) : (
                <Mail className="w-5 h-5 text-gray-500 transition-transform duration-200" />
              )}
              <span>Buka Undangan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
