"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Invitation: React.FC = () => {
  const searchParams = useSearchParams();

  // Fetch the invitee's name from the URL parameters
  const inviteeName = searchParams.get("inviteeName") || "Nama Tamu Undangan";

  // Static details about the wedding
  const groomName = "Alif Laksono";
  const brideName = "Nancy Momoland";
  const weddingDate = "March 25, 2025";
  const venue = "Gedung Pemuda Ambarawa";
  const message = "We are thrilled to celebrate our special day with you!";

  // Google Maps link for the venue location
  const mapsLink = "https://shorturl.at/rVwOR";

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-8">
      <div className="bg-white shadow-2xl rounded-lg p-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-wide mb-2">
          Wedding Invitation
        </h1>
        <p className="text-lg text-slate-700 mb-8 italic">
          Dear {inviteeName},
        </p>
        <p className="text-slate-950 capitalize">the wedding of</p>
        <h2 className="text-5xl font-bold text-slate-900 mb-6 italic font-serif">
          {groomName} & {brideName}
        </h2>

        <p className="text-slate-600 text-lg mb-10">{message}</p>

        <div className="my-10">
          <div className="text-2xl font-semibold text-slate-800">
            {weddingDate}
          </div>
          <div className="text-lg text-slate-600 mt-2">{venue}</div>
        </div>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-slate-800 text-white font-medium rounded-lg shadow-md hover:bg-slate-900   transition duration-300 mt-10 inline-block"
        >
          View Location on Google Maps
        </a>
      </div>
    </div>
  );
};

export default Invitation;
