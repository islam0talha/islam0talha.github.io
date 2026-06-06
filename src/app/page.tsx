import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Experience } from "@/app/sections/Experience";
import { FeaturedProjects } from "@/app/sections/FeaturedProjects";
import { OtherProjects } from "@/app/sections/OtherProjects";
import { Contact } from "@/app/sections/Contact";
import { Footer } from "@/app/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />
      <Footer />
    </>
  );
}
