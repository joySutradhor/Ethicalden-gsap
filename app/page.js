"use client";

import { useEffect, useState } from "react";
import AboutUs from "./home/AboutUs/AboutUs";
import AllStories from "./home/AllStories/AllStories";
import ClientsCollaboration from "./home/ClientsCollaboration/ClientsCollaboration";
import Gallery from "./home/Gallery/Gallery";
import NewLattestProjects from "./home/NewLattestProjects/NewLattestProjects";
import HeaderBanner from "./home/HeaderBanner/HeaderBanner";
import Loader from "@/components/Loader/Loader";
import "./globals.css";
import "./main.css";
import { delay } from "@/components/utils/delay"
import Footer from "@/components/Shared/Footer/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    delay(1500).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <HeaderBanner />
      <AboutUs />
      <Gallery />
      <NewLattestProjects />
      <AllStories />
      <ClientsCollaboration />
      <Footer />
    </section>
  );
}
