"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/infrastructure/analytics/firebase-client";
import { Navbar } from "@/presentation/components/layout/navbar";
import { Footer } from "@/presentation/components/layout/footer";
import { Hero } from "@/presentation/sections/hero";
import { About } from "@/presentation/sections/about";
import { Experience } from "@/presentation/sections/experience";
import { Projects } from "@/presentation/sections/projects";
import { Highlights } from "@/presentation/sections/highlights";
import { Skills } from "@/presentation/sections/skills";
import { Contact } from "@/presentation/sections/contact";

export function HomeView() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Highlights />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
