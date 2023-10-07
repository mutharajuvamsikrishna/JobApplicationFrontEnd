import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const navigate = useNavigate();
const [loading,setLoading]=useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      mob: mob,
    };

    if (data.mob.length !== 10) {
      alert("Mobile Number Should be 10 Digits Only");
      return;
    }
  setLoading(true)
    try {
      const response = await axios.post(
        "http://localhost:1279/adminchangepassword",
        data
      );
      if (response.data === "adminotp") {
        console.log(response.data);
        console.log("Response data type:", typeof response.data);
        navigate("/adminchangepassword", { state: { data: data } }); // Use navigate to change the route
      } else {
        navigate("/Invalidcredits"); // Navigate to "/Invalidcredits"
        console.log(response.data);
      }
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };
  if (loading) {
    return <div><br/><br/><br></br><br/><br/><center><h1>Loading.....</h1></center></div>;
  }
  return (
    <div style={{ backgroundColor: 'lightyellow', height: '99vh' }}>
      <center>
        <br /><br /><br /><br /><br /><br />
        <h2>Forget Password</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='email'
                  style={{width:"200%"}} required />
                </td>
              </tr>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
              <tr>
                <td>Mobile</td>
                <td>
                  <input type="text" value={mob} onChange={(e) => setMob(e.target.value)} autoComplete='tel'
                    style={{width:"200%"}} required />
                </td>
              </tr>

            </tbody>
          </table>
          <br />
          <input type="submit" value="Submit" style={{ color: 'green' }} />
        </form>
        <br /><br />
        <Link to="/adminlogin">Go Back</Link>
      </center>
    </div>

  );
};

export default AdminForgetPassword;
