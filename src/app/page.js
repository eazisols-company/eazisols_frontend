"use client";

import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import LogoSection, { ReverseSectionsSlider } from "./components/LogoSection";
import LogoSliderr from "./components/LogoSliderr";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import WaterfallProcess from "./components/WaterfallProcess";
import Services from "./components/Services";
import NewBlogs from "./components/NewBlogs";
// import LogoSliderr from "./components/LogoSliderr";
import TestimonialSection from "./components/TestimonialSection";
import ReuseContact from "./components/ReuseContact";
import Hsection from "./components/Hsection";
import NewHero from "./components/new/NewHero";
import DiscoveryCall from "./components/new/DiscoveryCall";
import ProcessTimeline from "./components/new/ProcessTimeline";
import StatsSection from "./components/new/StatsSection";
import ComparisonSection from "./components/new/ComparisonSection";
import NewCTA from "./components/new/NewCTA";
import Review from "./components/new/Review";
import ChallengesSection from "./components/new/ChallengesSection";
import BarChart from "./components/new/BarChart";
import NewReview from "./components/new/NewReview";
import Practice from "./components/Practice";



export default function Home() {
  return (
    <div 
    className="bg-light"
    style={{backgroundColor: "#f8f8f8" }}>
      {/* <HeroSection /> */}
      <NewHero />
      <LogoSliderr />
      {/* <ReverseSectionsSlider />
      <LogoSection /> */}
      {/* <ReverseSectionsSlideer /> */}
      {/* <WaterfallProcess /> */}
      {/* <AboutSection />
      <Hsection /> */}
      {/* <NewBlogs />
      <TestimonialSection /> */}
      {/* <ReuseContact /> */}
      {/* <CTASection
        description1="YOU WANT TO SHOWCASE YOUR WEBSITE"
        description2="Quote Generator"
      /> */}
      {/* <Services /> */}
      <ProcessTimeline />
      {/* <Review /> */}
      <NewReview />
      <ChallengesSection />
      {/* <StatsSection /> */}
      <Practice />
      <BarChart />
      {/* <ComparisonSection /> */}
      <DiscoveryCall />
      <FAQSection />
      <NewCTA />
    </div>
  );
}
