import React from "react";
import Image from "next/image";
import ProfilePic from "@/app/asset/IMG_1859.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "./src/fonts";
// import { wedding } from "@/app/utils/types";

// export default function Quote({ data }: { data: wedding }) {
export default function Quote() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center space-y-8 text-center bg-slate-950 relative"
      style={{
        backgroundImage: `url(${ProfilePic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="quote"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className={`z-20 ${isInView ? "animate-slideDown" : "opacity-0"}`}
        ref={ref}
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
        className={`z-20 px-6 max-w-3xl relative animate-slide-right ${
          isInView ? "animate-slideUp" : "opacity-0"
        }`}
        ref={ref}
      >
        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 text-white ${fonts.montserrat}`}
        >
          Alicia Gomez
        </p>
      </div>

      <div
        className={`z-20 pb-5 md:pb-10 ${
          isInView ? "animate-slideUp" : "opacity-0"
        }`}
        ref={ref}
      >
        <h4
          className={`text-white scroll-m-20 text-xl tracking-tight max-w-xl ${fonts.bodoni}`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatibus consequuntur, at mollitia earum doloremque
          nobis ratione illum tenetur fuga repellendus autem qui ad cumque
          sapiente facilis necessitatibus, nemo eius.
        </h4>
      </div>
    </section>
  );
}
