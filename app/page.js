"use client";

import { useEffect, useState } from "react";
import AboutUs from "./home/AboutUs/AboutUs";
import ClientsCollaboration from "./home/ClientsCollaboration/ClientsCollaboration";
import Gallery from "./home/Gallery/Gallery";
import NewLattestProjects from "./home/NewLattestProjects/NewLattestProjects";
import Loader from "@/components/Loader/Loader";
import "./globals.css";
import "./main.css";
import { delay } from "@/components/utils/delay"
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import NewBanner from "@/components/NewBanner/NewBanner";
import OurProducts from "@/components/OurProducts/OurProducts";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    delay(2000).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <Navbar />
      <NewBanner />
      <AboutUs />
      <Gallery />
      <NewLattestProjects />
      <OurProducts />
      <ClientsCollaboration />
      <Footer />
    </section>
  );
}
