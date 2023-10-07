import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

const ChangeOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  // Access the data object passed from the previous route, if available
  const data = location.state.data;
  console.log(data);

  // const ename1 = data.email;

  const handleSubmit = (event) => {
    event.preventDefault();

    const otpdata = {
      otp: otp,
    };
    if (otpdata.otp.length !== 6) {
      alert("OTP must be 6 digits only");
      return;
    }

    // You can use axios to send the data to your backend server
    axios
      .post(`http://localhost:1279/adminotp5?otp=${otp}`, otpdata)
      .then((response) => {
        // Handle the response here if needed
        if (response.data === "adminchangeregsucess") {
          navigate("/adminchangepassword1", { state: { data: data } });
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
        <h2 style={{ color: "blue" }}>Enter Your OTP </h2>
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

export default ChangeOtp;
