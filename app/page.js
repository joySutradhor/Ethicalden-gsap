import AboutUs from "./home/AboutUs/AboutUs";
import AllStories from "./home/AllStories/AllStories";
import Banner from "./home/Banner/Banner";
import ClientsCollaboration from "./home/ClientsCollaboration/ClientsCollaboration";
import CTA from "./home/CTA/CTA";
import Gallery from "./home/Gallery/Gallery";
import LattestProjects from "./home/LattestProjects/LattestProjects";
import "./globals.css";


export default function Home() {
  return (
  <section>
    <AboutUs/>
    <AllStories/>
    <Banner/>
    <ClientsCollaboration/>
    <Gallery/>
    <LattestProjects/>
    <CTA/>
  </section>
  );
}
