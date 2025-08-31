"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <div className="font-mono w-full mx-auto min-h-screen">
      <main className="mx-auto max-w-4xl px-2 sm:px-4">
        <Header />

        <Hero />

        <Projects />

        <Experience />

        <TechStack />

        <Clients />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}
