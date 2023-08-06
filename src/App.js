import React, { Fragment } from "react";
import "./index.css";
import Navs from "./component/Navbars/Navs";
import Header from "./component/Pages.js/Header";
import Slide from "./component/slides/Slide";
import Section1 from "./component/sections/Section1";
import Section2 from "./component/sections/Section2";
import Section3 from "./component/sections/Section3";
import Section4 from "./component/sections/Section4";
import Section5 from "./component/sections/Section5";
import Section6 from "./component/sections/Section6";
import Footer from "./component/Footer";



function App() {
  return (
    <Fragment >
        <Navs/>
        <Header/>
        <Slide/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
        
    </Fragment>
  );
}
export default App;

