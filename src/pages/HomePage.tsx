import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatProp3Does from '../components/WhatProp3Does';
import WhyItMatters from '../components/WhyItMatters';
import WhyPayForIt from '../components/WhyPayForIt';
import TestimonialsPlaceholder from '../components/TestimonialsPlaceholder';
import FinalCTA from '../components/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <div className="font-['Inter',system-ui,sans-serif]">
      <HeroSection />
      <WhatProp3Does />
      <WhyItMatters />
      <WhyPayForIt />
      <TestimonialsPlaceholder />
      <FinalCTA />
    </div>
  );
};

export default HomePage;