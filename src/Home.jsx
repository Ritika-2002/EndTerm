import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import head_image from "../src/images/29-removebg-preview.png";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Learn Graphic Designing with"
        imgsrc={head_image}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
