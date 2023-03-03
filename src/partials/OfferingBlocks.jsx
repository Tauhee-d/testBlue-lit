import React from "react";
import { Link } from "react-router-dom";

function OfferingBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Offerings & Approach</h2>
            <p className="text-xl text-gray-400">
            "The strength, we possess in servicing our client is based on our core-competencies."
            </p>
          </div>

          {/* Items */}
          <div>
          <h6 className="h4 mb-4">Our Offerings</h6>

            <p>
            Whether you are searching for outsourcing a project, or to meet a specific IT service needs, Tanisha Systems can assist you. Our clients enjoy a true partnership, total professionalism and excellent customer support supported by our proven track record of success. Offerings & Approachs
            </p>
            <ul className="mt-4">
              <li>*   Out-source or Co-source Custom Application Development</li>
              <li>*   Application Maintenance Services</li>
              <li>*    Professional Consulting Services</li>
              <li>*    QA & Testing Services</li>
              <li>*    Business Intelligence</li>
              <li>*    Data Analysis and Migration services</li>
              <li>*   ERP Services - SAP and PeopleSoft Implementation, maintenance and upgrades.</li>
              <li>*   Business Process Outsourcing</li>
              <li>*   Staff Augmentation</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferingBlocks;
