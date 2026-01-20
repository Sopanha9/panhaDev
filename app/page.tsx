import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import ScrollProgress from "@/components/ScrollProgress";

import Leisure from "@/components/Leisure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Leisure />
      <Footer />
    </main>
  );
}
