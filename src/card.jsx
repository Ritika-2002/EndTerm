import React from "react";
import { NavLink } from "react-router-dom";
import card_image from "../src/images/GD-3.jpg";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img id="card_img_size" src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{ props.title }</h5>
            <p className="card-text">
              {props.card_text}
            </p>
            <NavLink to="https://www.canva.com/learn/famous-graphic-designers" className="btn btn-primary">
              Let's Explore
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
