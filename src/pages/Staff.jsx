import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import OfferingBlocks from '../partials/OfferingBlocks';
import StaffBlock from '../partials/Staff';

function Staff() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          {/* <PageIllustration /> */}
        </div>

        {/*  Page sections */}
        {/* <HeroHome /> */}
        <div style={{marginTop:'30px'}}>
        <StaffBlock/>
          </div>
        {/* <FeaturesBlocks /> */}
        {/* <FeaturesZigZag /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

    

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Staff;