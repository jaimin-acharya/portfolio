"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <div className="font-mono w-full min-h-screen px-2">
      <Header />
      <main className="mx-auto  max-w-4xl ">
        <Hero />

        <About />

        <TechStack />

        <Experience />

        <Projects />

        <Clients />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
