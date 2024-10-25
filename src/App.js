import React from "react";
import Blog from "./containers/blog/Blog";
import CTA from "./components/cta/CTA";
import Footer from "./containers/footer/Footer";
import Possibility from "./containers/possibility/Possibility";
import Features from "./containers/features/Features";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import './App.css';



const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
