import Benifits from "@/components/Homepage/Benifits";
import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/Homepage/Navbar";

export default function Home() {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <Hero />
      <Benifits />
      <Features />
    </div>
  );
}
