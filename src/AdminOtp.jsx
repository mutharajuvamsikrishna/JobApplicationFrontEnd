import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

const AdminOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  // Access the data object passed from the previous route, if available
  const data = location.state.data;
  console.log(data);

  const ename = data.ename;

  const handleSubmit = (event) => {
    event.preventDefault();

    const otpdata = {
      otp: otp,
    };
    if (otpdata.otp.length != 6) {
      alert("OTP 6 digits only");
      return false;
    }

    // You can use axios to send the data to your backend server

    axios
      .post(`http://localhost:1279/adminotp1?otp=${otp}`, otpdata)
      .then((response) => {
        // Handle the response here if needed
        if (response.data == "adminregsucess") {
          navigate("/adminregsucess", { state: { data: data } }); // Use navigate to change the route

          console.log(response.data);
        } else {
          navigate("/invalidotp");
        }
      })

      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <div style={{ backgroundColor: "lightgreen", height: "100vh" }}>
      <center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 style={{ color: "bluew" }}>Hello {ename} Enter Your OTP</h2>
        <form onSubmit={handleSubmit}>
          {/* ... Your existing form elements ... */}
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Submit" style={{ color: "green" }} />
        </form>
        <br />
        <br />
        <Link to="/reg">Go Back</Link>
      </center>
    </div>
  );
};

export default AdminOtp;
