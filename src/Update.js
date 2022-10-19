import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setImage(localStorage.getItem("image"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id....", id);
    axios
      .put(`https://634be338317dc96a308cc04e.mockapi.io/MyWorld/${id}`, {
        name: name,
        email: email,
        image: image,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2 className="text-center update_heading">Update Your Data</h2>
      <div className="row">
          <div className="col-8 mx-auto m-3">
            <div className="row gy-5">
              <div className="col-md-4 col-5 mx-auto">
                <div className="card">
                  <div className="card-body update_body">
      <form class="form1">
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label update_var">
            Name
          </label>
          <input
            type="text"
            className="form-control update_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label update_var">
            Email address
          </label>
          <input
            type="email"
            className="form-control update_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputImage1" className="form-label update_var">
            Upload Image
          </label>
          <input
            type="text"
            className="form-control update_input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning update_button"
          onClick={handleUpdate}
        >
          Update
        </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Update;
