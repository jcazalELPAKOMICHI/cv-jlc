"use client";

import { Navbar } from "@/presentation/components/layout/navbar";
import { Footer } from "@/presentation/components/layout/footer";
import { Hero } from "@/presentation/sections/hero";
import { About } from "@/presentation/sections/about";
import { Experience } from "@/presentation/sections/experience";
import { Projects } from "@/presentation/sections/projects";
import { Skills } from "@/presentation/sections/skills";
import { Contact } from "@/presentation/sections/contact";

export function HomeView() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
