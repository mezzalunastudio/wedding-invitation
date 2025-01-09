"use client";
import React, { useState } from "react";
import { useInView } from "@/app/hooks/useInView";
import { wedding } from "@/app/utils/types";
import { sendRsvp } from "@/app/utils/apihelper";

export default function RSVP({ data }: { data: wedding }) {
  const rsvpList = data.rsvp || [];
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attendance, setAttendance] = useState<string>("present");
  const [rsvps, setRsvps] = useState(rsvpList);
  const [error, setError] = useState<string>("");
  const { ref, isInView } = useInView();

  const onSubmit = async () => {
    try {
      // Construct the RSVP data
      const newRsvp = {
        sender: name,
        message,
        attendance,
      };

      // Send RSVP to the API
      const updatedWedding = await sendRsvp(data._id!, newRsvp);

      // Update the local RSVP list and clear the form
      setRsvps(updatedWedding.rsvp);
      setName("");
      setMessage("");
      setAttendance("present");

      alert("RSVP submitted successfully!");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Submission failed. Please try again."
      );
    }
  };

  return (
    <section
      className={`p-6 space-y-4 bg-gray-500 min-h-screen flex flex-col justify-center`}
      id="event"
      style={{
        backgroundImage: `url(${data.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Parent div of the greeting form */}
      <div className="h-full mx-auto w-full md:w-4/5 lg:w-3/4 z-20 bg-gray-500 bg-opacity-70 rounded-lg p-2 lgp-6">
        {/* Greeting Form */}
        <div
          className={`text-center space-y-6 my-4 md:my-6 z-50 ${
            isInView ? "animate-slideUp" : "opacity-0"
          }`}
          ref={ref}
        >
          <h1 className="text-4xl font-bold text-white">RSVP & Ucapan</h1>
          <p className="text-sm lg:text-lg text-white">
            Diharapkan kepada tamu undangan untuk mengisi form kehadiran dibawah
            ini
          </p>
        </div>

        <div
          className={`space-y-4 sm:w-1/2 w-3/4 mx-auto text-white z-50 ${
            isInView ? "animate-slideDown" : "opacity-0"
          }`}
          ref={ref}
        >
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama"
              className="border-b-2 border-gray-200/10 p-2 w-full focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Berikan Ucapkan"
              className="border-b-2 border-gray-200/10 p-2 w-full focus:outline-none bg-transparent"
              rows={5}
            />
          </div>

          <div>
            <label className="block text-white mb-1">
              Konfirmasi Kehadiran
            </label>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="border-b-2 border-gray-200/10 p-2 w-full focus:outline-none bg-transparent"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak hadir">Tidak Hadir</option>
              <option value="Ragu-ragu">Ragu-Ragu</option>
            </select>
          </div>

          <div className="flex justify-start text-center mt-4">
            <button
              className="rounded-full bg-gray-400 px-4 py-2 flex items-center justify-center space-x-2"
              onClick={onSubmit}
            >
              <span>Berikan Ucapan</span>
            </button>
          </div>

          {error && <p className="text-red-500">{error}</p>}
        </div>
        {/* RSVP List */}
        <div className="mt-6">
          <h2 className="text-lg text-white mb-4">Ucapan</h2>
          {rsvps.map((rsvp, index) => (
            <div
              key={index}
              className="text-white bg-gray-700 p-4 rounded-lg mb-2"
            >
              <p>
                <strong>{rsvp.sender}</strong>: {rsvp.message}
              </p>
              <p>
                <em>
                  Kehadiran:{" "}
                  {rsvp.attendance === "present"
                    ? "Hadir"
                    : rsvp.attendance === "not present"
                    ? "Tidak Hadir"
                    : "Ragu-Ragu"}
                </em>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
