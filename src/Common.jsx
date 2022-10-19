import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-item-centre">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 id="heading">
                    {props.name}
                    <strong className="brand_name">
                      <br /> MyWorld
                    </strong>
                  </h1>
                  <h4 className="my-3">
                    We are the team of skilled designers creating new trends{" "}
                  </h4>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary bs-btn-border-color: var(--bd-violet);"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    id="main_image"
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="uploding"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;

// FetchingData
// getting data from the database
// const [studetnDetails, setStudentDetails] = useState([]);
// useEffect(() => {
//   Axios.get("http://localhost:8000/read")
// })

