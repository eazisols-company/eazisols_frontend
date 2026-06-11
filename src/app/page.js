"use client";

import FAQSection from "./components/FAQSection";
import LogoSliderr from "./components/LogoSliderr";
import NewHero from "./components/new/NewHero";
import DiscoveryCall from "./components/new/DiscoveryCall";
import ProcessTimeline from "./components/new/ProcessTimeline";
import NewCTA from "./components/new/NewCTA";
import ChallengesSection from "./components/new/ChallengesSection";
import BarChart from "./components/new/BarChart";
import NewReview from "./components/new/NewReview";
import Statics from "./components/Statics";





export default function Home() {
  return (
    <div 
    className="bg-light"
    style={{backgroundColor: "#f8f8f8" }}>

      <NewHero />
      <LogoSliderr />
      <ProcessTimeline />
      <NewReview />
      <ChallengesSection />
      <Statics />
      <BarChart />
      <DiscoveryCall />
      <FAQSection />
      <NewCTA />

    </div>
  );
}
