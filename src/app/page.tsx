import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Thesis from "@/components/Thesis";
import HowItWorks from "@/components/HowItWorks";
import WhatExists from "@/components/WhatExists";
import Cohort from "@/components/Cohort";
import Projects from "@/components/Projects";
import WhyItWorks from "@/components/WhyItWorks";
import TheAsk from "@/components/TheAsk";
import Opportunity from "@/components/Opportunity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Thesis />
      <HowItWorks />
      <WhatExists />
      <Cohort />
      <Projects />
      <WhyItWorks />
      <TheAsk />
      <Opportunity />
      <Footer />
    </main>
  );
}
