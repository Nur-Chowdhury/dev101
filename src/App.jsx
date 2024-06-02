import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import BannerDetails from './Components/BannerDetails'
import bl1 from "./assets/bl1.jpg"
import bl2 from "./assets/bl2.jpg"
import Banner from './Components/Banner'
import Blog from './Components/Blog'
import Footer from './Components/Footer'

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
          <Navbar />
      </div>
      <Hero />
      <Service />
      <BannerDetails reverse={true} img={bl1} />
      <BannerDetails img={bl2} />
      <Banner />
      <Blog />
      <Footer />
    </div>
  )
}
