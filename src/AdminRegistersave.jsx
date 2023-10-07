import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

const AdminRegistersave = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading,setLoading]=useState(false);
  console.log(location);
  const data1 = location.state.data;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = location.state?.data; // Use optional chaining to check if data exists
    if (data) {
      console.log(data);

      // You can use axios to send the data to your backend server
      axios
        .post(`http://localhost:1279/adminsave`, data)
        .then((response) => {
          // Handle the response here if needed

          navigate("/regsucess1", { state: { data: data } }); // Use navigate to change the route

          console.log(response.data);
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
        });
    } else {
      console.error("Data not found in location state.");
    }
  };

  return (
    <div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <center>
        <h3 style={{ color: "green" }}>preview</h3>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>{data1.ename}</td>
            </tr>
            <tr>
              <td>{data1.email}</td>
            </tr>
            <tr>
              <td>{data1.mob}</td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />
        <button onClick={handleSubmit}>Confirm</button>
        <br />
        <br />
        <Link to="/admin">Go Back</Link>
      </center>
    </div>
  );
};

export default AdminRegistersave;
