"use client"
import AboutUs from "./home/AboutUs/AboutUs";
import AllStories from "./home/AllStories/AllStories";
import ClientsCollaboration from "./home/ClientsCollaboration/ClientsCollaboration";
import Gallery from "./home/Gallery/Gallery";
import "./globals.css";
import "./main.css"
import NewLattestProjects from "./home/NewLattestProjects/NewLattestProjects";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import HeaderBanner from "./home/HeaderBanner/HeaderBanner";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    } ); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
  <section>
    <HeaderBanner />
    <AboutUs/>
    <Gallery/>
    <NewLattestProjects />
    <AllStories/>
    <ClientsCollaboration/>
  </section>
  );
}
