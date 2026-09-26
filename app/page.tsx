import { About } from "./components/about";
import { Achievements } from "./components/achievements";
import { Certifications } from "./components/certifications";
import { Contact } from "./components/contact";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { FeaturedProject } from "./components/featured-project";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Leadership } from "./components/leadership";
import { Navbar } from "./components/navbar";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProject />
        <Skills />
        <Certifications />
        <Leadership />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
