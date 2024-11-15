import React from "react";
import Image from "next/image";
import ProfilePic from "../../asset/IMG_1859.jpg";
import { useInView } from "../../hooks/useInView";

export default function Quote() {
  const { ref: imageRef, isInView: isImageInView } = useInView();
  const { ref: detailsRef, isInView: isDetailsInView } = useInView();
  return (
    <section
      className="h-screen flex flex-col justify-center items-center space-y-8 text-center bg-slate-950 relative"
      style={{
        backgroundImage: `url(${ProfilePic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="quote"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className={`z-10 ${isImageInView ? "animate-slideRight" : "opacity-0"}`}
        ref={imageRef}
      >
        {/* add animation from left to right */}
        <Image
          src={ProfilePic}
          alt="Picture of the author"
          width={300}
          height={300}
          className="rounded-[100px_20px_100px_20px] box-border"
        />
      </div>

      {/* Quote Text */}
      <div
        className={`px-6 max-w-3xl relative z-10 animate-slide-right ${
          isDetailsInView ? "animate-slideLeft" : "opacity-0"
        }`}
        ref={detailsRef}
      >
        {/* add animation from right to left */}
        <span className="text-lg italic font-medium leading-relaxed text-white">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.
        </span>
      </div>

      <div
        className={`relative z-10 ${
          isDetailsInView ? "animate-slideLeft" : "opacity-0"
        }`}
        ref={detailsRef}
      >
        {/* add animation from right to left */}
        <span className="text-lg font-semibold text-white">
          QS. Ar-Rum : 21
        </span>
      </div>
    </section>
  );
}
