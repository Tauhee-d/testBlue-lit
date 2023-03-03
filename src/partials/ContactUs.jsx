import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function ContactUs() {
  return (
    <section>
      <Header/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-400">Get in Touch.</p>

          </div>

          {/* Items */}
          <div>
            <p>
            Give us a call or send us an email and we will get back to you.            </p>
          
            <ul className="mt-4">
              <li>Have a question? Call us</li>
              <p>567483663</p>
              <li>Email Us</li>
              <p>bluelit@gmail.com</p>
              <li>Coporate Office</li>
              <p>99 Wood Ave South, Suite # 308, Iselin,</p>
              <p> NJ 08830</p>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
