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



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
  <section>
    {/* <AboutUs/> */}
    {/* <Gallery/> */}
    <NewLattestProjects />
    {/* <AllStories/> */}
    <ClientsCollaboration/>
  </section>
  );
}
