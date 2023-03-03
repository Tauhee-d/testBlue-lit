import React from "react";
import { Link } from "react-router-dom";

function ServicesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Services Overview.</h2>
            <p className="text-xl text-gray-400">
              We are leading provider of custom application and end-to-end IT
              service.
            </p>
          </div>

          {/* Items */}
          <div>
            <p>
              Tanisha Systems offers a broad range of business solutions and
              technology services to help clients in achieving their business
              goals. We believe in value creation with primary focus on
              harnessing intellectual resources to get the maximum value out of
              IT spending. Despite a global slowdown, we continued on a growth
              path because we develop Bright People with Right Skills to deliver
              Brilliant Solutions to our clients. The strength, we possess in
              servicing our client is based on our core-competencies.
            </p>
            <p>
              Whether you are searching for outsourcing a project, or to meet a
              specific IT service needs, Tanisha Systems can assist you. Our
              clients enjoy a true partnership, total professionalism and
              excellent customer support supported by our proven track record of
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesBlocks;
