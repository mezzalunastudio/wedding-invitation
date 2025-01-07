import React from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/app/asset/IMG_1859.jpg";
import img2 from "@/app/asset/IMG_1878.jpg";
import img3 from "@/app/asset/IMG_1885.jpg";
import img4 from "@/app/asset/IMG_1890.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "./src/fonts";
// import { wedding } from "@/app/utils/types";

interface imageData {
  src: string | StaticImageData;
  alt: string;
}

const images: imageData[] = [
  { src: img1, alt: "Gallery Image 1" },
  { src: img2, alt: "Gallery Image 2" },
  { src: img3, alt: "Gallery Image 3" },
  { src: img4, alt: "Gallery Image 4" },
];

// export default function Gallery({ data }: { data: wedding }) {
export default function Gallery() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-12 bg-stone-500" id="gallery">
      <h1
        ref={ref}
        className={` text-center text-white md:mb-8 mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${
          fonts.bodoni
        } ${isInView ? "animate-slideDown" : "opacity-0"}`}
      >
        Gallery
      </h1>

      <div className="max-w-6xl mx-auto space-y-12 px-4">
        <div
          className={`flex space-x-4 pb-4 overflow-x-auto ${
            isInView ? "animate-slideUp" : "opacity-0"
          }`}
          ref={ref}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-64 h-[400px] flex-shrink-0 snap-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-md"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        <div
          className={`flex justify-center ${
            isInView ? "animate-slideDown" : "opacity-0"
          }`}
          ref={ref}
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/CGoxTMkNbmQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full sm:w-3/4 lg:w-1/2 rounded-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
