'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Expertise } from '@/components/sections/expertise';
import { Work } from '@/components/sections/work';
import { Experience } from '@/components/sections/experience';
import { CvSection } from '@/components/sections/cv-section';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Experience />
        <CvSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
