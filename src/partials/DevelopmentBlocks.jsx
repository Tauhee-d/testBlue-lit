import React from "react";
import { Link } from "react-router-dom";

function DevelopmentBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Custom Development</h2>
          </div>

          {/* Items */}
          <div>
            <p>
              We take pride in delivering sustainable business solutions and not
              merely provide software developed in the latest technology full of
              the latest buzzwords. We create custom applications that are
              capable of consistent performance and rapid adaptation-with
              minimal interruptions in the current processes. We help
              organizations to expand their businesses by creating integrated
              solutions that are capable of performing across multiple platforms
              and business units. Flexibility & Cost Effectiveness are at the
              main focus of our application development and maintenance
              strategy.{" "}
            </p>
            <p>
              Our team of project solutions providers comprising Project
              Managers, Requirements Engineers, System Analyst, Technical
              Architects, Programmer and QA personnel. We ensure that the
              different stages of the project development cycle are fully
              staffed as per the project needs by the most competent and skilled
              individuals. With our experienced pool of experts we offer a
              comprehensive portfolio of services that span all major industrial
              verticals.
            </p>
            <ul className="mt-4">
              <li>* Application Development in all Major Programming languages and IDEs</li>
              <li>* Cost Effective Development and quick turnaround with Worldwide Development Center</li>
              <li>* Streamlined Application Development Processes</li>
              <li>* 24X7 Application Maintenance and Support</li>
           
             
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentBlocks;
