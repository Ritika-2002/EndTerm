import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Read = () => {
const [data, setData] = useState([]);

  function getData() {
    axios.get("https://634be338317dc96a308cc04e.mockapi.io/MyWorld").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios.delete(`https://634be338317dc96a308cc04e.mockapi.io/MyWorld/${id}`).then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email,image) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("image", image);
  };

  useEffect(() => {
    getData();
  }, []);

  getData();
  return (
    <>
      <h2 className="text-center">User Data</h2>
      
      <table className="table table-striped table-primary table-hover read_table">
        <thead className=" table-dark read_thead">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Uploaded Image</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr className=" table table-striped table-warning ">
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td><img src={(eachData.image)} style={{
                    height: '5rem',
                    width:'8rem',
                  }} /></td>
                  <td>
                    <NavLink to="/update">
                      <button
                        className="btn btn-outline-success read_button"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.image,
                          )
                        }
                      >
                        Edit{""}
                      </button>
                    </NavLink>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger read_button"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
