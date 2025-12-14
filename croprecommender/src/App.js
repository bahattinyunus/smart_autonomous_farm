import "./App.css";
import Footer from "./footer";
import Header from "./header";
import React, { useEffect, useState } from "react";
import Landing from "./landing";
import Des from "./des";
import Feature from "./feature";
import Croprecommend from "./croprecommend";
import Plantdis from "./plantdis";
import Fertilizer from "./fertilizer";
import Contact from "./contact";
import { inject } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";
function App() {
  inject();

  return (
    <>
      <Analytics />
      <div className="flex h-full flex-col min-h-screen bg-transparent text-white">
        <Header />
        <Landing />

        <section id="about" className="min-h-screen flex items-center justify-center p-8 bg-black/20 backdrop-blur-sm">
          <Des />
        </section>

        <section id="features" className="min-h-screen flex items-center justify-center p-8">
          <Feature />
        </section>

        <section id="croprecommender" className="min-h-screen flex items-center justify-center p-8 bg-black/20 backdrop-blur-sm">
          <Croprecommend />
        </section>

        <section id="fertilizer" className="min-h-screen flex items-center justify-center p-8">
          <Fertilizer />
        </section>

        <section id="plantdisease" className="min-h-screen flex items-center justify-center p-8 bg-black/20 backdrop-blur-sm">
          <Plantdis />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center p-8">
          <Contact />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
