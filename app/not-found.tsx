"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Halaman yang Anda cari tidak ditemukan.</p>
      <button
        onClick={handleBackToHome}
        className="px-6 py-3 bg-white outline outline-gray-300 text-black text-sm font-medium rounded-md shadow-md hover:opacity-80 transition"
      >
        Back to Home
      </button>
    </div>
  );
}
