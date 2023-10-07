import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation ,Link} from "react-router-dom";
import "./ViweAll.css";
import { SlLogout } from "react-icons/Sl";
const AdminProfile = () => {
  const [employee, setEmployee] = useState(null); // Change to single employee object
  const location = useLocation();
  const email = location.state.data.email;

  useEffect(() => {
    fetchEmployee();
  }, [email]);

  const fetchEmployee = () => {
    axios
      .get(`http://localhost:1279/reg?email=${email}`)
      .then((response) => {
        // Assuming response.data is a single employee object
        setEmployee(response.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container6" >
    
      <br /> <br /> <br /> <br /> <br />
      <div className="profile-header text-center">
      <h1  style={{ textDecoration: 'underline',color:"blue" }}>Profile</h1>
      </div>
      <div className="profile-content">
        <br/>
        {employee && (
          <div>
            <center>
            <p>
              <strong>Name:</strong> {employee.ename}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Mobile Number:</strong> {employee.mob}
            </p>
          
         <br/>
         <Link to="/adminlogin"> <SlLogout
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                      /></Link>
                      <p>Logout</p>
            </center>
          </div>
        )}
        
      </div>
    
     <br/> <br/>
     <br/>
    
    
      <center>
      <a href="javascript:history.go(-1)">Go Back</a>
      </center>
    </div>
  );
};

export default AdminProfile;
