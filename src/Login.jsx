import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import './App.css';
import link1 from '../src/images/link1.png';
import link2 from '../src/images/link4.png';
import link3 from '../src/images/link3.png';
import link4 from '../src/images/link5.png';
// import { useState, useEffect } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios.post("https://634be338317dc96a308cc04e.mockapi.io/MyWorld", {
      name: name,
      email: email,
      image:image,
      header,
    })
    .then(() => {
      history("/read");
    });
  };

  return (
    <>
      <div className="container-fluid mb-5">
        <h1 className="text-center login_heading">Login into Your Account</h1>
        <div className="row">
          <div className="col-8 mx-auto m-3">
            <div className="row gy-5">
              <div className="col-md-4 col-5 mx-auto">
                <div className="card">
                  <div className="card-body login_body">
                    <h5 className="card-title font-weight-bold text-center login_welcome">
                      Welcome
                    </h5>
                    <p className="card-title font-weight-bold text-center login_credentials">
                      Verify Your Credentials
                    </p>

                    <form className="form1">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input type="text" className="form-control"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label for="exampleFormControlInput1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Upload Image
                      </label>
                      <input type="text" className="form-control"
                        onChange={(e) => setImage(e.target.value)}
                      />
                      <input
                        type="checkbox"
                        id="remember_me"
                        name="remember"
                        value="remember_me"
                      />
                      <label for="remember_me"> Remember Me</label>

                      <br />
                      <button type="submit" className="btn2 btn-primary login_button" onClick={handleSubmit}>
                        LOGIN
                      </button>
                      <br />
                      <NavLink to="#" className="login_forgot">
                        Forgot password?
                      </NavLink>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="login_images" src={link1}></img>
        <img className="login_images" src={link2}></img>
        <img className="login_images" src={link3}></img>
        <img className="login_images" src={link4}></img>
      </div>
    </>
  );
};

export default Login;
