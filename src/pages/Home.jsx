import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import FeatureList from "../components/sections/FeatureList.jsx";
import QuoteSection from "../components/sections/QuoteSection.jsx";
import InfoBlock from "../components/sections/InfoBlock.jsx";
import FinalCtaBlock from "../components/sections/FinalCtaBlock.jsx";
import WhyStoreWithUs from "../components/sections/WhyStoreWithUs.jsx";
import NotAverageStorage from "../components/sections/NotAverageStorage.jsx";
import CitiesStatesNav from "../components/sections/CitiesStatesNav.jsx";

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureList />
        <QuoteSection />
        <InfoBlock />
        <WhyStoreWithUs />
        <NotAverageStorage />
        <FinalCtaBlock />
        <CitiesStatesNav />
      </main>
      <Footer />
    </>
  );
}

export default Home;



