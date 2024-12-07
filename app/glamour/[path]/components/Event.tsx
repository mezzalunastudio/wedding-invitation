"use client";
import React, { useState } from "react";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "../src/fonts";
import { wedding } from "@/app/utils/types";
import { Mail } from "lucide-react";

interface INewGreeting {
  name: string;
  message: string;
  attendance: string;
  time: string;
}

export default function Event({ data }: { data: wedding }) {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attendance, setAttendance] = useState<string>("present");
  const [greetings, setGreetings] = useState<INewGreeting[]>([]);
  const { ref, isInView } = useInView();

  const handleGreetingSubmit = (): void => {
    const newGreeting: INewGreeting = {
      name,
      message,
      attendance,
      time: new Date().toLocaleString(),
    };
    setGreetings([newGreeting, ...greetings]);
    setName("");
    setMessage("");
    setAttendance("present");
  };
  console.log(data.bride.shortName);

  return (
    <section
      className={`p-6 space-y-4 bg-gray-500 opacity-70 min-h-screen flex flex-col justify-center`}
      id="event"
    >
      {/* Greeting Form */}
      <div
        className={`text-center space-y-6 ${
          isInView ? "animate-slideUp" : "opacity-0"
        }`}
        ref={ref}
      >
        <h1 className={`${fonts.bodoni}`}>Reservation and Greeting</h1>
        <p className={`capitalize ${fonts.montserrat}`}>
          Send your warm wishes and confirm attendance
        </p>
      </div>

      <div
        className={`space-y-4 sm:w-1/2 w-3/4 mx-auto text-black ${
          fonts.montserrat
        } ${isInView ? "animate-slideDown" : "opacity-0"}`}
        ref={ref}
      >
        <div className="">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="border p-2 rounded w-full focus:outline-none"
          />
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message to the happy couple"
            className="border p-2 rounded w-full focus:outline-none"
            rows={5}
          />
        </div>

        <div>
          <label className="block text-black mb-1">Confirm Attendance</label>
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className="border p-2 rounded w-full focus:outline-none"
          >
            <option value="present">Present</option>
            <option value="not present">Not Present</option>
            <option value="hesitant">Hesitant</option>
          </select>
        </div>

        <div className="flex justify-center text-center mt-4">
          <button
            onClick={handleGreetingSubmit}
            className="btn flex items-center justify-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>Send Greeting</span>
          </button>
        </div>
      </div>

      {/* Display Greetings */}
      <div className="space-y-4 mt-8 sm:w-1/2 w-3/4 mx-auto text-black">
        <h2
          ref={ref}
          className={`text-center ${fonts.bodoni} ${
            isInView ? "animate-slideDown" : "opacity-0"
          }`}
        >
          Greetings
        </h2>
        {greetings.length > 0 ? (
          greetings.map((greeting, index) => (
            <div
              key={index}
              className={`p-4 border rounded-md bg-gray-100 space-y-2 capitalize ${fonts.montserrat}`}
            >
              <p>
                <span>Name:</span> {greeting.name}
              </p>
              <p>
                <span>Message:</span> {greeting.message}
              </p>
              <p>
                <span>Attendance:</span> {greeting.attendance}
              </p>
              <p>Sent at: {greeting.time}</p>
            </div>
          ))
        ) : (
          <p
            ref={ref}
            className={`text-center text-black ${
              isInView ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            No greetings yet. Be the first to send one!
          </p>
        )}
      </div>
    </section>
  );
}
