"use client";
import React, { useEffect, useState, useRef } from "react";
import { use } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Groom from "./components/Groom";
import Bridge from "./components/Bridge";
import Quote from "./components/Quote";
import Event from "./components/Rsvp";
import Rsvp from "./components/Event";
import Gallery from "./components/Gallery";
import Story from "./components/Story";
import Gift from "./components/Gift";
import Footer from "./components/Footer";
import NotFound from "@/app/not-found";
import { getWeddingContent } from "@/app/utils/apihelper";
import { emptyWeddingContent } from "@/app/utils/emptyWeddingContent";
import BukaUndangan from "./components/BukaUndangan";

export default function Glamour({
  params: paramsPromise,
}: {
  params: Promise<{ path: string }>;
}) {
  const category = "glamour";
  const params = use(paramsPromise);
  const { path } = params;
  const [weddingContent, setWeddingContent] = useState(emptyWeddingContent);
  const [showButton, setShowButton] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  const handleUnlock = () => {
    setIsUnlocked(true);
    headerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getWeddingContent(category, path);
        setWeddingContent(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // End loading
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

  //prevent error if fetch data not found
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p> {/* Show a loading indicator */}
      </div>
    );
  }

  //change later create 404 pages
  if (!weddingContent) {
    return (
      <>
        <NotFound />
      </>
    ); 

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
