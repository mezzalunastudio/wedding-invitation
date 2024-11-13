import React from "react";
import Image from "next/image";
import img1 from "../../asset/IMG_1859.jpg";
import img2 from "../../asset/IMG_1878.jpg";
import img3 from "../../asset/IMG_1885.jpg";
import img4 from "../../asset/IMG_1890.jpg";
// import Pict from "../asset/IMG_1892.jpg";

export default function Gallery() {
  return (
    <section className="py-12 bg-stone-500">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Gallery
      </h1>

      {/* Gallery Wrapper */}
      <div className="max-w-6xl mx-auto space-y-12 px-4">
        {/* Image Gallery Section in a Single Row */}
        <div className="flex space-x-4 pb-4 overflow-x-auto">
          {/* Images in a Row */}
          <div className="relative w-64 h-[400px] flex-shrink-0">
            <Image
              src={img1}
              alt="Gallery Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-64 h-[400px] flex-shrink-0">
            <Image
              src={img2}
              alt="Gallery Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-64 h-[400px] flex-shrink-0">
            <Image
              src={img3}
              alt="Gallery Image 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-64 h-[400px] flex-shrink-0">
            <Image
              src={img4}
              alt="Gallery Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="flex justify-center">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/CGoxTMkNbmQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
