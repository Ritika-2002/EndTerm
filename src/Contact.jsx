import React from "react";
import { useState } from "react";
const Contact = () => {
  //state
  const [data, setData] = useState({
    fullname: "",
    contact: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    //can access the data
    //inline function
    setData((preVal) => {
      return {
        //spread opreator
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.contact} and email is ${data.email},I want to say ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13748.91182690317!2d76.6528112!3d30.5145926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1666034142629!5m2!1sen!2sin"></iframe>
        </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-3 col-6 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Contact
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="contact"
                  value={data.contact}
                  onChange={InputEvent}
                  placeholder="mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
