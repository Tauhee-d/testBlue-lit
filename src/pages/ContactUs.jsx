import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import AboutUsBlock from '../partials/AboutUsBlocks ';
import ContactUsBlock from '../partials/ContactUsBlocks';

function ContactUs() {
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
        <ContactUsBlock/>
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

export default ContactUs;