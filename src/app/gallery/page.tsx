import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Gallery from "./(section)/Gallery";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-transparent">
        <Navbar position="absolute" />
        <Hero />
        <Gallery />
        <Footer />
      </div>
    </main>
  );
}
