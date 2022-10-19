import React from "react";
import Common from "./Common";
import head_image from "../src/images/GD-8.jpg";
import icon1 from "../src/images/icon1.png";
import icon2 from "../src/images/icon2.png";
import icon3 from "../src/images/icon3.png";
import icon4 from "../src/images/icon4.png";
import icon5 from "../src/images/icons5.png";
import icon6 from "../src/images/icon6.png";
import icon7 from "../src/images/icon7.png"
const About = () => {
  return (
    <>
      <Common
        name="Warm Welcome from "
        imgsrc={head_image}
        visit="/contact"
        btname="Contact Now"
      />
      <div className="about_margin">
        <p className="text-center m-5 about_p ">
          Graphic designers are in greater demand than ever. We are here to help
          you improve your skills so that you may be included among the finest
          graphic designers.
          <br />
          Even though graphic design sometimes seems like a young field, the
          contrary is actually true. Since the beginning of time, hundreds of
          designers have contributed to the expansion and evolution of the
          graphic design field.
        </p>
      </div>
      <div>
        <h1 className="text-center"> OUR PARTNERS</h1>
        <div className="row">
          <div className="d-flex justify-content-around"> 
            <img className="about_partners" src={icon1}/>
            <img className="about_partners" src={icon2}/>
            <img className="about_partners" src={icon3}/>
            <img className="about_partners" src={icon4}/>
            <img className="about_partners" src={icon5}/>
            <img className="about_partners" src={icon6} />
            <img className="about_partners" src={icon7}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
