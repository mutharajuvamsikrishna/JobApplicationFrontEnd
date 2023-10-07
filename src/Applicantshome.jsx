import React, { useState, useEffect } from 'react';
import {  Link, useLocation,useNavigate} from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
const Applicantshome = () => {
  const [formdata, setFormData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Access the data object passed from the previous route
  const data = location.state.data;
  const email = data.email;
  useEffect(() => {
    fetchEmployeeData(email);
  }, [email]);

  const fetchEmployeeData = (email) => {
    axios
      .get(`http://localhost:1279/reg?email=${email}`)
      .then((response) => {
        console.log("Response Data:", response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/application", { state: { data: data } }); // Use navigate to change the rout
  }

  const handleSubmit1 = (event) => {
    event.preventDefault();

    navigate("/viewapplication", { state: { data: data } }); // Use navigate to change the rout
  }
  const handleSubmit2 = () => {
    navigate("/profile", { state: { data: data } });
  }
  return (
    <>
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={handleSubmit2}
    >
      <CgProfile
        style={{
          height: "50px",
          width: "50px",
          color:"blue"
        }} />
    </div>
    <div>
     
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <center>
        <h1 style={{ color: 'green' }}>Welcome {formdata.ename}</h1>
        <br />
        {/* Pass the data object as state to the /viewapplication route */}
        <button className='btn btn-primary' onClick={handleSubmit}>Application</button>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary' onClick={handleSubmit1}>ViewApplication</button>
      </center>
    </div>
    </>
  );
};

export default Applicantshome;
