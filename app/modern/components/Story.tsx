import React from "react";
import Pict from "@/app/asset/IMG_1885.jpg";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "./src/fonts";
// import { wedding } from "@/app/utils/types";

// export default function Story({ data }: { data: wedding }) {
export default function Story() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="flex flex-col justify-center items-center text-center bg-slate-950 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${Pict.src})`,
      }}
      id="story"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div
        className={`text-center mt-12 z-10 ${
          isInView ? "animate-slideUp" : "opacity-0"
        }`}
        ref={ref}
      >
        <h1
          className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white ${fonts.bodoni}`}
        >
          Our Love Story
        </h1>
      </div>

      {/* Timeline Wrapper */}
      <div
        className={`relative max-w-6xl mx-auto px-4 space-y-4 z-10 my-12 ${
          isInView ? "animate-slideDown" : "opacity-0"
        }`}
        ref={ref}
      >
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white"></div>

        {/* Timeline Events */}
        <div className="space-y-10">
          {/* First Meet */}
          <div className="flex items-center justify-start relative">
            <div className="w-4/5 md:w-1/2 px-8">
              <div className="p-2 border border-gray-300 rounded-md text-white md:space-y-4 space-y-2">
                <h3
                  className={`text-white mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${fonts.bodoni}`}
                >
                  First Meet
                </h3>
                <p
                  className={`text-gray-200 leading-7 [&:not(:first-child)]:mt-6 md:mx-4 ${fonts.montserrat}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  perferendis veritatis quisquam expedita blanditiis doloremque
                  atque cum, nesciunt facere neque quas quibusdam ad quod dolore
                  enim exercitationem optio possimus sequi!
                </p>
              </div>
            </div>
          </div>

          {/* Proposal */}
          <div className="flex items-center justify-end relative">
            <div className="w-4/5 md:w-1/2 px-8">
              <div className="p-2 border border-gray-300 rounded-md text-white md:space-y-4 space-y-2">
                <h3
                  className={`text-white mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${fonts.bodoni}`}
                >
                  The Proposal
                </h3>
                <p
                  className={`text-gray-200 leading-7 [&:not(:first-child)]:mt-6 md:mx-4 ${fonts.montserrat}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus modi provident expedita officiis animi enim
                  soluta omnis reiciendis consequatur suscipit quam dignissimos
                  sint esse, obcaecati ullam dicta? Nemo, rerum ducimus?{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Marriage */}
          <div className="flex items-center justify-start relative">
            <div className="w-4/5 md:w-1/2 px-8">
              <div className="p-2 border border-gray-300 rounded-md text-white md:space-y-4 space-y-2">
                <h3
                  className={`text-white mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${fonts.bodoni}`}
                >
                  Marriage
                </h3>
                <p
                  className={`text-gray-200 leading-7 [&:not(:first-child)]:mt-6 md:mx-4 ${fonts.montserrat}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  inventore ipsum doloribus labore. Sapiente numquam molestias
                  porro est, doloribus deserunt quas ea, blanditiis officiis at
                  qui, omnis accusantium neque dolorum.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
