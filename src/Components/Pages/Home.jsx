import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import HomeBanner from "../Layout/HomeBanner";
import HomeAbout from "../Layout/HomeAbout";
import HomeServices from "../Layout/HomeServices";
import ContactCard from "../Layout/ContactCard";
import HomeProjects from "../Layout/HomeProjects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner/>
      <HomeAbout/>
      <HomeServices/>
      <ContactCard/>
      <HomeProjects/>
      <Footer/>
      
    </div>
  );
};

export default Home;