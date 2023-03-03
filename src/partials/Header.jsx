import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
            </Link>
          </div>


          <div>
          <nav className="hidden md:flex md:grow">

{/* Desktop sign in links */}
<ul className="flex grow justify-end flex-wrap items-center">
  <li>
    <Link to="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
  </li>
 
</ul>

</nav>
          </div>





      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"><span class="navbar-toggler-icon"><span class="ti ti-align-justify"></span></span></button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarToggle">      
        <ul class="navbar-nav animated remove-animation fadeInDown" data-animate="fadeInDown" data-delay=".9" style="visibility: visible; animation-delay: 0.9s;">
          <li class="nav-item"><a class="nav-link menu-link" href="index.html">Home<span class="sr-only">(current)</span></a></li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0);" onclick="aboutlink()">About us <i class="fa fa-angle-down"></i></a>
           <div class="dropdown-menu show" id="aboutlink" style="display: none;"> 
            <a class="dropdown-item menu-link" href="about.html">About TSI</a> 
            <a class="dropdown-item menu-link" href="corevalue.html">Core Value</a> 
            <a class="dropdown-item menu-link" href="whyus.html">Why Us ?</a> 
            <a class="dropdown-item menu-link" href="help.html">How can we help ?</a> 
            <a class="dropdown-item menu-link" href="diversity.html">Diversity at TSI</a> 
            <a class="dropdown-item menu-link" href="partners.html">Alliances and Partners</a>
            <a class="dropdown-item menu-link" href="relation.html">Investor Relation</a> 
            <a class="dropdown-item menu-link" href="alumni.html">Alumni Network </a> 
           </div>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);" onclick="servicelink()">Services <i class="fa fa-angle-down"></i></a>
            <div class="dropdown-menu show" id="servicelink" style="display: none;"> 
            <a class="dropdown-item menu-link" href="services.html">Service Overview</a> 
            <a class="dropdown-item menu-link" href="offering.html">Offerings &amp; Approach</a> 
            <a class="dropdown-item menu-link" href="development.html">Custom Development</a> 
            <a class="dropdown-item menu-link" href="outsource.html">Managed Services</a> 
            <a class="dropdown-item menu-link" href="consulting.html">Professional Services</a> 
            <a class="dropdown-item menu-link" href="staff.html">Staff Augmentation</a>
            <a class="dropdown-item menu-link" href="training.html">Training</a> 
            </div>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);" onclick="Industrylink()">Industry <i class="fa fa-angle-down"></i></a>
            <div class="dropdown-menu show" id="Industrylink" style="display: none;"> 
            <a class="dropdown-item menu-link" href="industry.html">Industry Overview</a> 
            <a class="dropdown-item menu-link" href="government.html">Government</a>             
            <a class="dropdown-item menu-link" href="banking.html">Banking &amp; Financial</a> 
            <a class="dropdown-item menu-link" href="insurance.html">Insurance</a> 
            <a class="dropdown-item menu-link" href="health.html">Health Care &amp;  Life Science</a> 
            <a class="dropdown-item menu-link" href="telecom.html">Telecom &amp;  Mobile Industry</a> 
            <a class="dropdown-item menu-link" href="retail.html">Retail &amp; Consumer Goods</a> 
            <a class="dropdown-item menu-link" href="energy.html">Energy &amp; Utility</a> 
            <a class="dropdown-item menu-link" href="others.html">Others</a> 
            </div>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);" onclick="Clientslink()">Clients <i class="fa fa-angle-down"></i></a>
            <div class="dropdown-menu show" id="Clientslink" style="display: none;"> 
            <a class="dropdown-item menu-link" href="clients.html">Our Clients</a> 
            <a class="dropdown-item menu-link" href="testimonials.html">Clients Testimonials</a> 
            <a class="dropdown-item menu-link" href="casestudies.html">Case Studies</a> 
            </div>            
          </li>
          <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);" onclick="Careerlink()">Career <i class="fa fa-angle-down"></i></a>
            <div class="dropdown-menu show" id="Careerlink" style="display: none;"> 
            <a class="dropdown-item menu-link" href="careers.html">Careers Overview</a> 
            <a class="dropdown-item menu-link" href="culture.html">Culture at TSI</a> 
            <a class="dropdown-item menu-link" href="currentopenings.html">Current Openings</a> 
            <a class="dropdown-item menu-link" href="joinus.html">Join Us</a> 
            <a class="dropdown-item menu-link" href="benefits.html">Employee Benefits</a> 
            <a class="dropdown-item menu-link" href="immigration.html">Immigration</a> 
            </div>
          </li>
          <li class="nav-item"><a class="nav-link menu-link"  href="contact.html">Contact</a></li>
        </ul>
      </div> */}







          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
