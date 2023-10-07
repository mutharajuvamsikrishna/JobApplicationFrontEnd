import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const AdminPasswordChange = () => {
  const [cnpassword, setCnpassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Move this line before any references to 'location'

  console.log(location);
  const email = location.state.data.email; // Now you can access 'location'

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
      cnpassword: cnpassword,
    };

    var v1 = data.password;
    var v2 = data.cnpassword;
    if (v1 != v2) {
      alert("Password doesn't Match To Confirm Password");
      return false;
    }

    axios
      .put("http://localhost:1279/adminchangepassword1", data)
      .then((response) => {
        if (response.data === "adminchangepassword") {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
          navigate({
            pathname: "/adminsuccess",
            state: { data: data }, // Pass the data object as state
          });
        } else {
          navigate("/Invalidcredits");
          console.log(response.data);
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <div style={{ backgroundColor: "lightyellow", height: "100vh" }}>
      <center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <h2>Change Password</h2>
        <div style={{backgroundColor:"white",minHeight:"50vh",width:"40%"}}>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
           <br/>
           <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Password'
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
           <br/>
           <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="cnpassword"
              value={cnpassword}
              onChange={(e) => setCnpassword(e.target.value)}
              placeholder='Enter Confirm Password'
              autoComplete="off"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Change</button>
        </form>
        </div>
        <br />
        <br />
        <a href="/adminlogin">Go Back</a>
      </center>
    
    </div>
  );
};

export default AdminPasswordChange;
