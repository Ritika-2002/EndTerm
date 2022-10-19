import React from "react";
import img_data from "./img_data";
import Card from "./card";
const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {/* <Card /> */}
              {img_data.map((val, ind) => {
                return <Card
                  card_text="Mastery Course of Graphic Designing by which you can upgrade your creative skills aling with styling, thought process and color combination."
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
