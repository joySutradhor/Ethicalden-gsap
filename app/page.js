import AboutUs from "./home/AboutUs/AboutUs";
import AllStories from "./home/AllStories/AllStories";
import Banner from "./home/Banner/Banner";
import ClientsCollaboration from "./home/ClientsCollaboration/ClientsCollaboration";
import CTA from "./home/CTA/CTA";
import Gallery from "./home/Gallery/Gallery";
import "./globals.css";
import NewLattestProjects from "./home/NewLattestProjects/NewLattestProjects";
import HeaderBanner from "./home/HeaderBanner/HeaderBanner";


export default function Home() {
  return (
  <section>
    <HeaderBanner />
    <AboutUs/>
    <AllStories/>
    <Banner/>
    <ClientsCollaboration/>
    <Gallery/>
    <NewLattestProjects></NewLattestProjects>
    <CTA/>
  </section>
  );
}
