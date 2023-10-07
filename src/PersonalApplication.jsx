import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Application.css";
const PersonalApplication = () => {
  const location = useLocation(); // Move this line before any references to 'location'

  const email = location.state.data.email; // Now you can access 'locat
  

 
  const [formData, setFormData] = useState({
    regno:"",
    name: "",
    mob: "",
    adhar: "",
    pan: "",
    val1: "",
    status1: "",
    passportnumber: "",
    exp1: "",
    val2: "",
    status2: "",
    visanumber: "",
    exp2: "",
    date: "",
    adress: "",
    city: "",
    state: "",
    pinnumber: "",
    email: email,
  });

  const navigate = useNavigate();

  const [showAdditionalRows1, setShowAdditionalRows1] = useState({
    val2: "",
  });

  const [showAdditionalRows, setShowAdditionalRows] = useState({
    val1: "", // Default value for the 'Onsite Travelled' select field
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    var v4 = /^[a-zA-Z\s]*$/;

    var v6 = /^\d{10}$/;
    var v10 = formData.pan;

    var v11 = /[A-Z0-9]/;

    var v9 = /^\d{12}$/;

    var v25 = /^[a-zA-Z\s]*$/;

    var v27 = /^[a-zA-Z\s]*$/;

    

    var v31 = /^\d{6}$/;

    if (!formData.name.match(v4)) {
      alert("Name Alphabets Only");

      return false;
    }

    if (!formData.mob.match(v6)) {
      alert("Mobile Number must be 1 to 10 Integers");

      return false;
    }

    if (formData.gender !== "male" && formData.gender !== "female") {
      alert("Please Select Gender");

      return false;
    }

    if (!formData.adhar.match(v9)) {
      alert("Adhar Number must be 1 to 12 Integers");

      return false;
    }
    if (!formData.pan.match(v11)) {
      alert(" Characters and Numeric have length 10 in pan");

      return false;
    }
    if (v10.length !== 10) {
      alert(" Pan Length Maximum 10 Characters");
      return false;
    }

    if (!formData.adress.match(v25)) {
      alert("Special Characters Not Allowed in Adress ");

      return false;
    }

    if (!formData.city.match(v27)) {
      alert("Special Characters Not Allowed in City");

      return false;
    }

    if (!formData.pinnumber.match(v31)) {
      alert("Pin Number must be 1 to 6 Integers");

      return false;
    }

    axios
      .post("http://localhost:1279/persave", formData)
      .then((response) => {
        if (response.data === "sucess") {
          navigate("/success", { state: { data: formData } }); // Use navigate to change the route
        } else {
          navigate("/regfail");
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  // Function to handle changes in form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "val1") {
      setShowAdditionalRows({
        ...showAdditionalRows,
        val1: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (name === "val2") {
      setShowAdditionalRows1({
        ...showAdditionalRows1,
        val2: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="" style={{ minHeight: "100vh", background: "skyblue" }}>
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <h2 className="text-center mb-4" style={{ color: "blue" }}>
            Personal Details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group row my-2"></div>

            <div className="form-group row my-1">
              {" "}
              {/* Add my-2 class here */}
              <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
                Name
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  id="sdate"
                  autoComplete="name"
                  required
                />

              </div>
            
             
            </div>

            <div className="form-group row my-1">
              
              <label htmlFor="edate" className="col-sm-2 col-form-label my-1">
                Mobile Number
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="mob"
                  value={formData.mob}
                  onChange={handleInputChange}
                  className="form-control"
                  id="edate"
                  autoComplete="tel"
                  required
                />
              </div>
              <label htmlFor="email" className="col-sm-1 col-form-label my-1">
                Email
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  id="email"
                  autoComplete="email"
                  readOnly
                  
                />
              </div>
            </div>

            <div className="form-group row my-2">
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
                Gender
              </label>
              <div className="col-sm-3 my-1">
                <select
                  id=""
                  name="gender"
                  style={{ color: "green", appearance: "auto" }}
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                >
                  <option value="select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <label htmlFor="Da" className="col-sm-1 col-form-label my-1">
                Date Of Birth
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-control"
                  id="notice"
                  autoComplete="date"
                  required
                />
              </div>
            </div>

            <div className="form-group row my-1">
              <label htmlFor="lwd" className="col-sm-2 col-form-label my-1">
                Aadhar Number
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="adhar"
                  value={formData.adhar}
                  onChange={handleInputChange}
                  className="form-control"
                  id="lwd"
                  autoComplete=""
                  required
                />
              </div>
              {/* <div className="form-group row my-1">  */}
              <label
                htmlFor="expertise"
                className="col-sm-1 col-form-label my-1"
              >
                PanCard Number
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleInputChange}
                  className="form-control"
                  id="expertise"
                  autoComplete=""
                  required
                />
              </div>
            </div>

            <div className="form-group row my-2 d-flex">
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
                Do you have a Passport?
              </label>
              <div className="col-sm-3 my-1">
                <select
                  id="id"
                  name="val1"
                  style={{ color: "green", appearance: "auto" }}
                  value={formData.val1}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                >
                  <option value="select">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            {showAdditionalRows.val1 === "yes" && (
              <>
                <div className="form-group row my-2 d-flex">
                  <label
                    htmlFor="countries"
                    className="col-sm-2 col-form-label my-1"
                  >
                    Passport Number
                  </label>
                  <div className="col-sm-3 my-1">
                    <input
                      type="text"
                      name="passportnumber"
                      value={formData.passportnumber}
                      onChange={handleInputChange}
                      className="form-control"
                      id="countries"
                      autoComplete=""
                      required
                    />
                  </div>
                  {/* <div className="form-group row my-2 d-flex"> */}
                  <label
                    htmlFor="countries"
                    className="col-sm-1 col-form-label my-1"
                  >
                    Passport Status
                  </label>
                  <div className="col-sm-3 my-1">
                    <input
                      type="text"
                      name="status1"
                      value={formData.status1}
                      onChange={handleInputChange}
                      className="form-control"
                      id="countries"
                      autoComplete=""
                      required
                    />
                  </div>
                </div>

                <div className="form-group row my-2 d-flex">
                  <label
                    htmlFor="cities"
                    className="col-sm-2 col-form-label my-1"
                  >
                    Passport Expiry Date
                  </label>
                  <div className="col-sm-3 my-1">
                    <input
                      type="date"
                      name="exp1"
                      value={formData.exp1}
                      onChange={handleInputChange}
                      className="form-control"
                      id="cities"
                      autoComplete=""
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="form-group row my-2 d-flex">
              <label htmlFor="id" className="col-sm-2 col-form-label my-1">
                Do you have a VISA?
              </label>
              <div className="col-sm-3 my-1">
                <select
                  id="prev"
                  name="val2"
                  style={{ color: "green", appearance: "auto" }}
                  value={formData.val2}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                >
                  <option value="select">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            {showAdditionalRows1.val2 === "yes" && (
              <>
                <div className="form-group row my-2 d-flex">
                  {" "}
                  {/* Add my-2 class and d-flex class here */}
                  <label
                    htmlFor="expertise"
                    className="col-sm-2 col-form-label my-1"
                  >
                    VisaNumber
                  </label>{" "}
                  {/* Add my-1 class here */}
                  <div className="col-sm-3 my-1">
                    {" "}
                    {/* Add my-1 class here */}
                    <input
                      type="text"
                      name="visanumber"
                      value={formData.visanumber}
                      onChange={handleInputChange}
                      className="form-control"
                      id="languages"
                      autoComplete=""
                      required
                    />
                  </div>
                  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
                  <label
                    htmlFor="expertise"
                    className="col-sm-1 col-form-label my-1"
                  >
                    VISA Type
                  </label>{" "}
                  {/* Add my-1 class here */}
                  <div className="col-sm-3 my-1">
                    {" "}
                    {/* Add my-1 class here */}
                    <input
                      type="text"
                      name="status2"
                      value={formData.status2}
                      onChange={handleInputChange}
                      className="form-control"
                      id="languages"
                      autoComplete=""
                      required
                    />
                  </div>
                </div>

                <div className="form-group row my-2 d-flex">
                  {" "}
                  {/* Add my-2 class and d-flex class here */}
                  <label
                    htmlFor="expertise"
                    className="col-sm-2 col-form-label my-1"
                  >
                    VISA Expiry Date
                  </label>{" "}
                  {/* Add my-1 class here */}
                  <div className="col-sm-3 my-1">
                    {" "}
                    {/* Add my-1 class here */}
                    <input
                      type="date"
                      name="exp2"
                      value={formData.exp2}
                      onChange={handleInputChange}
                      className="form-control"
                      id="languages"
                      autoComplete=""
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="form-group row my-2 d-flex">
              {" "}
              {/* Add my-2 class and d-flex class here */}
              <label
                htmlFor="expertise"
                className="col-sm-2 col-form-label my-1"
              >
                Address
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="adress"
                  value={formData.adress}
                  onChange={handleInputChange}
                  className="form-control"
                  id="pskills"
                  autoComplete=""
                  required
                />
              </div>
              {/* <div className="form-group row my-2 d-flex"> */}
              <label
                htmlFor="expertise"
                className="col-sm-1 col-form-label my-1"
              >
                City
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-control"
                  id="cuctc"
                  autoComplete=""
                  required
                />
              </div>
            </div>

            <div className="form-group row my-2 d-flex">
              {" "}
              {/* Add my-2 class and d-flex class here */}
              <label htmlFor="expctc" className="col-sm-2 col-form-label my-1">
                State
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="form-control"
                  id="expctc"
                  autoComplete=""
                  required
                />
              </div>
              {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
              <label
                htmlFor="expertise"
                className="col-sm-1 col-form-label my-1"
              >
                Pin Code
              </label>{" "}
              {/* Add my-1 class here */}
              <div className="col-sm-3 my-1">
                {" "}
                {/* Add my-1 class here */}
                <input
                  type="text"
                  name="pinnumber"
                  value={formData.pinnumber}
                  onChange={handleInputChange}
                  className="form-control"
                  id="link"
                  autoComplete=""
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="offset-sm-3 col-sm-9">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <br /> <br />
          <div className="text-center">
            <a href="/reg" className="btn btn-secondary">
              Go Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalApplication;
