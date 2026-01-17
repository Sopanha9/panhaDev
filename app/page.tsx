import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      {/* Additional sections can go here */}
    </main>
  );
}
