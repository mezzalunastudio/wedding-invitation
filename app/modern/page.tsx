"use client";
import React from "react";
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

export default function Modern() {
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
    </div>
  );
}

// <Header data={weddingContent} />
// <Hero data={weddingContent} />
// <Groom data={weddingContent} />
// <Bridge data={weddingContent} />
// <Quote data={weddingContent} />
// <Event data={weddingContent} />
// <Rsvp data={weddingContent} />
// <Gallery data={weddingContent} />
// <Story data={weddingContent} />
// <Gift data={weddingContent} />
// <Footer data={weddingContent} />
