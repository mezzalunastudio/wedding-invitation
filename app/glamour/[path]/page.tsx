"use client";
import React, { useEffect, useState, useRef } from "react";
import { use } from "react";
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
import { getWeddingContent } from "@/app/utils/datahelper";
import { emptyWeddingContent } from "@/app/utils/emptyWeddingContent";
import BukaUndangan from "./components/BukaUndangan";

export default function Glamour({
  params: paramsPromise,
}: {
  params: Promise<{ path: string }>;
}) {
  const params = use(paramsPromise);
  const { path } = params;

  const [weddingContent, setWeddingContent] = useState(emptyWeddingContent);
  const [showButton, setShowButton] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleUnlock = () => {
    setIsUnlocked(true);
    headerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeddingContent(path);
        setWeddingContent(data);
      } catch (error) {
        console.error("Error fetching wedding content:", error);
      }
    };

    fetchData();
  }, [path]);

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
    <div
      className={`relative ${
        isUnlocked ? "overflow-auto h-auto" : "overflow-hidden h-screen"
      }`}
    >
      {!isUnlocked && (
        <BukaUndangan data={weddingContent} onUnlock={handleUnlock} />
      )}

      <div ref={headerRef}>
        {isUnlocked && (
          <>
            <Header data={weddingContent} />
            <Hero data={weddingContent} />
            <Groom data={weddingContent} />
            <Bridge data={weddingContent} />
            <Quote data={weddingContent} />
            <Event data={weddingContent} />
            <Rsvp data={weddingContent} />
            <Gallery data={weddingContent} />
            <Story data={weddingContent} />
            <Gift data={weddingContent} />
            <Footer data={weddingContent} />

            {showButton && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 p-3 bg-slate-700 text-white rounded-full shadow-md hover:bg-slate-800 transition"
                aria-label="Scroll to top"
              >
                ↑
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
