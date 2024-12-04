"use client";
import React, { useState } from "react";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "@/app/syifannabil/src/fonts";

interface INewGreeting {
  name: string;
  message: string;
  attendance: string;
  time: string;
}

export default function Event() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attendance, setAttendance] = useState<string>("present");
  const [greetings, setGreetings] = useState<INewGreeting[]>([]);
  const { ref: isGreetingRef, isInView: setisGreetingRef } = useInView();

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

  return (
    <section
      className={`p-6 space-y-4 bg-gray-500 opacity-70 min-h-screen flex flex-col justify-center`}
      id="event"
    >
      {/* Greeting Form */}
      <div
        className={`text-center space-y-6 ${
          setisGreetingRef ? "animate-fadeIn" : "opacity-0"
        }`}
        ref={isGreetingRef}
      >
        <h1 className={`${fonts.bodoni}`}>Reservation and Greeting</h1>
        <p className={`capitalize ${fonts.montserrat}`}>
          Send your warm wishes and confirm attendance
        </p>
      </div>

      <div
        className={`space-y-4 sm:w-1/2 w-3/4 mx-auto text-black ${
          fonts.montserrat
        } ${setisGreetingRef ? "animate-fadeIn" : "opacity-0"}`}
        ref={isGreetingRef}
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

        <div className="text-center">
          <button onClick={handleGreetingSubmit} className="btn">
            Send Greeting
          </button>
        </div>
      </div>

      {/* Display Greetings */}
      <div className="space-y-4 mt-8 sm:w-1/2 w-3/4 mx-auto text-black">
        <h2 className={`text-center ${fonts.bodoni}`}>Greetings</h2>
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
          <p className="text-center text-black">
            No greetings yet. Be the first to send one!
          </p>
        )}
      </div>
    </section>
  );
}
