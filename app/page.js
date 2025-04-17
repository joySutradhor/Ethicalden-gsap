import AboutUs from "./home/AboutUs/AboutUs";
import AllStories from "./home/AllStories/AllStories";
import Banner from "./home/Banner/Banner";
import ClientsCollaboration from "./home/ClientsCollaboration/ClientsCollaboration";
import CTA from "./home/CTA/CTA";
import Gallery from "./home/Gallery/Gallery";
import LattestProjects from "./home/LattestProjects/LattestProjects";
import "./globals.css";
import NewLattestProjects from "./home/NewLattestProjects/NewLattestProjects";


export default function Home() {
  return (
  <section>
    <AboutUs/>
    <AllStories/>
    <Banner/>
    <Gallery/>
    <LattestProjects/>
    <NewLattestProjects></NewLattestProjects>
    <ClientsCollaboration/>
    <CTA/>
  </section>
  );
}
