import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import Service from "@/components/Home/Service";
import Testinomial from "@/components/Home/Testinomial";
import Who from "@/components/Home/Who";
import Why from "@/components/Home/Why";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Who />
      <Service />
      <Why />
      <Testinomial />
      <Footer />
    </main>
  );
}
