import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Service from './pages/Service';
import Offerings from './pages/Offerings';
import Development from './pages/Development';
import Staff from './pages/Staff';
import Openings from './pages/Openings';
import AboutUsBlock from './partials/AboutUsBlocks ';
import About from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/staffAugmentation" element={<Staff />} />
        <Route path="/service" element={<Service />} />
        <Route path="/offeringsAndApporach" element={<Offerings />} />
        <Route path="/development" element={<Development />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/openings" element={<Openings />} />
        <Route path="/aboutUs" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
