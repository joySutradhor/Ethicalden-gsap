import AboutUs from "./home/AboutUs/AboutUs";
import AllStories from "./home/AllStories/AllStories";
import ClientsCollaboration from "./home/ClientsCollaboration/ClientsCollaboration";
import Gallery from "./home/Gallery/Gallery";
import "./globals.css";
import NewLattestProjects from "./home/NewLattestProjects/NewLattestProjects";



export default function Home() {
  return (
  <section>
    <AboutUs/>
    <Gallery/>
    <NewLattestProjects />
    <AllStories/>
    <ClientsCollaboration/>
  </section>
  );
}
