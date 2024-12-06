"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Groom from "./components/Groom";
import Bridge from "./components/Bridge";
import Quote from "./components/Quote";
import Event from "./components/Event";
import Rsvp from "./components/Rsvp";
import Gallery from "./components/Gallery";
import Story from "./components/Story";
import Gift from "./components/Gift";
import Footer from "./components/Footer";
import Popup from "./components/PopUp";
import { useEffect, useState } from "react";

export default function Syifannabil() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const closePopup = () => setIsPopupVisible(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <Hero />
      <Groom />
      <Bridge />
      <Quote />
      <Event />
      <Rsvp />
      <Gallery />
      <Story />
      <Gift />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-slate-700 text-white rounded-full shadow-md hover:bg-slate-800 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      {/* <button
        onClick={openPopup}
        className="fixed top-4 right-4 p-3 bg-slate-700 text-white rounded-full shadow-md hover:bg-slate-800 transition"
        aria-label="Use this template"
      >
        Use This Template
      </button> */}

      {/* Popup */}
      {isPopupVisible && <Popup onClose={closePopup} />}
    </div>
  );
}
