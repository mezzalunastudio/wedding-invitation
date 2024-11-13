import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 ">
      <h1 className="text-center text-2xl font-bold mb-8">
        Jasa Pembuatan Website Undangan Pernikahan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="p-6 rounded-lg shadow-md text-center border-2 border-white hover:bg-opacity-80">
          <h1 className="text-xl font-semibold mb-4">Modern Template</h1>
          <button className="text-slate-500 font-medium">
            <a
              href="http://localhost:3000/syifannabil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syifa & Nabil
            </a>
          </button>
        </div>
        <div className="p-6 rounded-lg shadow-md text-center border-2 border-white hover:bg-opacity-80">
          <h1 className="text-xl font-semibold mb-4">Modern Template</h1>
          <button className="text-slate-500 font-medium">
            <a
              href="http://localhost:3000/syifannabil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syifa & Nabil
            </a>
          </button>
        </div>
        <div className="p-6 rounded-lg shadow-md text-center border-2 border-white hover:bg-opacity-80">
          <h1 className="text-xl font-semibold mb-4">Modern Template</h1>
          <button className="text-slate-500 font-medium">
            <a
              href="http://localhost:3000/syifannabil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syifa & Nabil
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
