"use client";
import React, { useState } from "react";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "../src/fonts";
import { wedding } from "@/app/utils/types";
import { CalendarDays } from "lucide-react";
import Pict from "@/app/asset/IMG_1859.jpg";
import { Button } from "@/components/ui/button";
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
      className={`p-6 space-y-4 bg-gray-500 min-h-screen flex flex-col justify-center text-white`}
      id="event"
      style={{
        backgroundImage: `url(${Pict.src})`,
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
          <h1
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl${fonts.bodoni}`}
          >
            RSVP & Ucapan
          </h1>
          <p
            className={`capitalize leading-7 [&:not(:first-child)]:mt-6  ${fonts.montserrat}`}
          >
            Diharapkan kepada tamu undangan untuk mengisi form kehadiran dibawah
            ini
          </p>
        </div>
        <div
          className={`space-y-4 sm:w-1/2 w-3/4 mx-auto text-white z-50 ${
            fonts.montserrat
          } ${isInView ? "animate-slideDown" : "opacity-0"}`}
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
              className="border-b-2 text-sm lg:text-lg border-gray-200/10 p-2 w-full focus:outline-none bg-transparent"
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
            <Button
              variant="outline"
              className="bg-transparent"
              onClick={onSubmit}
            >
              <span>Berikan Ucapan</span>
            </Button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        {/* Display Greetings */}
        <div className="space-y-4 mt-8 sm:w-1/2 w-3/4 mx-auto text-white z-30">
          {rsvpList.length > 0 ? (
            rsvps.map((greeting, index) => (
              <div
                key={index}
                className={`p-4 bg-transparent space-y-2 capitalize border-b-2 border-gray-200/10 ${fonts.montserrat}`}
              >
                <div className="flex flex-row justify-start items-center space-x-4">
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    {greeting.sender}
                  </p>
                  {(() => {
                    if (greeting.attendance === "Hadir") {
                      return (
                        <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          {greeting.attendance}
                        </span>
                      );
                    } else if (greeting.attendance === "Tidak hadir") {
                      return (
                        <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          {greeting.attendance}
                        </span>
                      );
                    } else {
                      return (
                        <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          {greeting.attendance}
                        </span>
                      );
                    }
                  })()}
                </div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {greeting.message}
                </p>

                <p className="flex items-center space-x-2 text-gray-400 leading-7 [&:not(:first-child)]:mt-6">
                  <CalendarDays />
                  <span>
                    {/* format this date later */}
                    {greeting.createdDate.toString()}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <p
              ref={ref}
              className={`text-center leading-7 [&:not(:first-child)]:mt-6 ${
                isInView ? "animate-fadeIn" : "opacity-0"
              }`}
            >
              Belum ada yang mengirim pesan!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
