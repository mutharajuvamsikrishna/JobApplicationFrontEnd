import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useLocation,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Application.css';
import { AiOutlineLinkedin,AiOutlineMail,} from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
const Application = () => {
  
  const location = useLocation(); // Move this line before any references to 'location'
  const email = location.state.data.email; // Now you can access 'locat
  const [formData, setFormData] = useState({

    expy:"Applied",
    id:"Select",
    immi: '',
    sdate: '',
    edate: '',
    notice: 'Select',
    domain: '',
    expertise: '',
    pskills: '',
    cuctc: '',
    expctc: '',
    link: '',
    culocation: '',
    prelocaion: '',
    languages: '',
    frameworks: '',
    tools: '',
    databases1: '',
    servers: '',
    cloud: '',
    val5: '',
    coun: '',
    citi: '',
    onciti: '',
    onciticli: '',
    prevCompanyName: '',
    id1: '',
    prevEmployeeName: '',
    location: '',
    workedYears: '',
    prevFromDate: '',
    prevToDate: '',
    role: '',
    designation: '',
    ctc: '',
    prevCompanyName1: '',
    id11: '',
    prevEmployeeName1: '',
    location1: '',
    workedYears1: '',
    prevFromDate1: '',
    prevToDate1: '',
    role1: '',
    designation1: '',
    ctc1: '',
   lwd:"",
    id12: '',
   rexpy:'',
  email:email
   
    
  });
  useEffect(() => {
    // Function to calculate the experience in years
    function calculateExperience() {
      const startDate = new Date(formData.sdate);
      const endDate = new Date(formData.edate);
  
      if (!isNaN(startDate) && !isNaN(endDate)) {
        const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Approximate milliseconds in a year
        const experienceInYears = (endDate - startDate) / millisecondsPerYear;
  
        setFormData({
          ...formData,
          rexpy: experienceInYears.toFixed(1),
        });
      }
    }
  
    calculateExperience(); // Initial calculation
  
    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      const sdateInput = document.getElementById('sdate');
      const edateInput = document.getElementById('edate');
  
      // Check if the elements are not null before removing the event listeners
      if (sdateInput) {
        sdateInput.removeEventListener('input', calculateExperience);
      }
      if (edateInput) {
        edateInput.removeEventListener('input', calculateExperience);
      }
    };
  }, [formData.sdate, formData.edate]); // Trigger the effect whenever sdate or edate changes
  
  
 const navigate = useNavigate();
 
 const [showAdditionalRows1, setShowAdditionalRows1] = useState({
  id12: '',
});

 const [showAdditionalRows, setShowAdditionalRows] = useState({
  val5: '' // Default value for the 'Onsite Travelled' select field
});

 

  
  const handleSubmit = (event) => {
    event.preventDefault();
if(formData.notice==="Select"==="Select"
&&formData.val5==="Select"){
  alert("Please Select Notice Period")
}
if(formData.id==="Select"){
alert("Please Select Job Id")
}
if(formData.immi==="Select"){
alert("Please Select Immidiate Joiner")
}

    axios
      .post('http://localhost:1279/prosave', formData)
      .then((response) => {
        if (response.data === "personaldetails") {
         
          
navigate("/personalapplication", { state: { data: formData } }); // Use navigate to change the route

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
  
    if (name === 'val5') {
      setShowAdditionalRows({
        ...showAdditionalRows,
        val5: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
  
 if (name === 'id12') {
    setShowAdditionalRows1({
      ...showAdditionalRows1,
      id12: value,
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  };
  const handleSubmit2 = () => {
    const data={
      email:email,
    }
    navigate("/profile", { state: { data: data } });
  }
  return (
    <div className="" style={{ minHeight: '100vh',background:"skyblue" }}>
       <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={()=>handleSubmit2("profile")}
    >
      <CgProfile
        style={{
          height: "50px",
          width: "50px",
          color:"blue"
        }} />
    </div>
  <div className="row justify-content-center">
    <div className="col-md-6 mt-5">
      <h2 className="text-center mb-4" style={{color:"blue"}}>ONiE Soft Job Application</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group row my-2">
  <label htmlFor="id" className="col-sm-3 col-form-label my-1">
    Job Applied For
  </label>
  <div className="col-sm-3 my-1">
    <select
      id="id"
      name="id"
       style={{ color: "green", appearance: "auto" }}
      value={formData.id}
      onChange={handleInputChange}
      className="form-control"
      required
    >
      <option value="Select">Select </option>
      <option value="Sr JAVA Dev Jun23">Sr JAVA Dev Jun23</option>
      <option value="Sr PYTHON Dev Jun23">Sr PYTHON Dev Jun23</option>
      <option value="Sr ReactJS Dev Jun23">Sr ReactJS Dev Jun23</option>
    </select>
  </div>



        {/* <div className="form-group row my-1"> */}
          <label htmlFor="email" className="col-sm-2 col-form-label my-1">Email  <AiOutlineMail/></label> {/* Add my-1 class here */}
          <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              id="email"
              autoComplete="email"
             readOnly
              required
            />
          </div>
        </div>




        <div className="form-group row my-1"> {/* Add my-2 class here */}
          <label htmlFor="immi" className="col-sm-3 col-form-label my-1">Duration - From</label> {/* Add my-1 class here */}
          <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
            <input
              type="date"
              name="sdate"
              value={formData.sdate}
              onChange={handleInputChange}
              className="form-control"
              id="sdate"
              autoComplete="date"
              required
            />
          </div>
     

        {/* <div className="form-group row my-1"> Add my-2 class here */}
          <label htmlFor="edate" className="col-sm-2 col-form-label my-1">To</label> {/* Add my-1 class here */}
          <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
            <input
              type="date"
              name="edate"
              value={formData.edate}
              onChange={handleInputChange}
              className="form-control"
              id="edate"
              autoComplete="date"
              required
            />
          </div>
        </div>

        <div className="form-group row my-1"> {/* Add my-2 class here */}
          <label htmlFor="rexpy" className="col-sm-3 col-form-label my-1">Relevant IT/SW Exp. in Years</label> {/* Add my-1 class here */}
          <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
            <input
              type="text"
              name="rexpy"
              value={formData.rexpy}
              onChange={handleInputChange}
              className="form-control"
              id="rexpy"
              autoComplete=""
              readOnly
              required
            />
          </div>
       {/* <div className="form-group row my-1"> Add my-2 class here */}
       <label htmlFor="notice" className="col-sm-2 col-form-label my-1">Notice Period</label> {/* Add my-1 class here */}
          <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
         
          <select
                  id="notice"
                  name="notice"
                style={{ color: "green", appearance: "auto" }}
                  value={formData.notice}
                  onChange={handleInputChange}
                  className="form-control"
                  
                >
                  <option value="Select">Select </option>
                  <option value="15">15 </option>
                  <option value="30">30 </option>
                  <option value=""> 45</option>
                  <option value="60"> 60</option>
                  <option value="75">75 </option>
                </select>
          </div>
        </div>

        <div className="form-group row my-1"> {/* Add my-2 class here */}
          <label htmlFor="lwd" className="col-sm-3 col-form-label my-1">LWD (If Resigned)</label> {/* Add my-1 class here */}
          <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
            <input
              type="date"
              name="lwd"
              value={formData.lwd}
              onChange={handleInputChange}
              className="form-control"
              id="lwd"
              autoComplete=""
             
            />
          </div>
       

        {/* <div className="form-group row my-2"> */}
  <label htmlFor="immi" className="col-sm-2 col-form-label my-1">
    Immidiate Joiner
  </label>
  <div className="col-sm-3 my-1">
    <select
      id="immi"
      name="immi"
       style={{ color: "green", appearance: "auto" }}
      value={formData.immi}
      onChange={handleInputChange}
      className="form-control"
      required
    >
      <option value="Select">Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>
</div>

      
<div className="form-group row my-1"> {/* Add my-2 class here */}
          <label htmlFor="domain" className="col-sm-3 col-form-label my-1">Domain</label> {/* Add my-1 class here */}
          <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
              className="form-control"
              id="domain"
              autoComplete=""
              required
            />
          </div>
        
        {/* <div className="form-group row my-1"> Add my-2 class here */}
          <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Expertise In</label> {/* Add my-1 class here */}
          <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
            <input
              type="text"
              name="expertise"
              value={formData.expertise}
              onChange={handleInputChange}
              className="form-control"
              id="expertise"
              autoComplete=""
              required
            />
          </div>
        </div>




      


      <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Primarry Skills</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="pskills"
      value={formData.pskills}
      onChange={handleInputChange}
      className="form-control"
      id="pskills"
      autoComplete=""
      required
    />
  </div>






{/* <div className="form-group row my-2 d-flex"> */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Current CTC</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="cuctc"
      value={formData.cuctc}
      onChange={handleInputChange}
      className="form-control"
      id="cuctc"
      autoComplete=""
      required
    />
  </div>
</div>


<div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expctc" className="col-sm-3 col-form-label my-1">Expected CTC</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="expctc"
      value={formData.expctc}
      onChange={handleInputChange}
      className="form-control"
      id="expctc"
      autoComplete=""
      required
    />
  </div>


  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">LinkedIn Profile Link  <AiOutlineLinkedin/></label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="link"
      value={formData.link}
      onChange={handleInputChange}
      className="form-control"
      id="link"
      autoComplete=""
      required
    />
  </div>
</div>


<div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Current Location</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="culocation"
      value={formData.culocation}
      onChange={handleInputChange}
      className="form-control"
      id="culocation"
      autoComplete=""
      required
    />
  </div>



  
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Prefed Location</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="prelocaion"
      value={formData.prelocaion}
      onChange={handleInputChange}
      className="form-control"
      id="prelocation"
      autoComplete=""
      required
    />
  </div>
  </div>



  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Prog. Languages</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="languages"
      value={formData.languages}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>

  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">FrameWorks</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="frameworks"
      value={formData.frameworks}
      onChange={handleInputChange}
      className="form-control"
      id="frameworks"
      autoComplete=""
      required
    />
  </div>
  </div>


  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Tools</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="tools"
      value={formData.tools}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Databases  </label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="databases1"
      value={formData.databases1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
     
    />
  </div>
  </div>



  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Servers</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="servers"
      value={formData.servers}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Cloud Services</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="cloud"
      value={formData.cloud}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
     
    />
  </div>
  </div>

  



<div className="form-group row my-2 d-flex">
  <label htmlFor="id" className="col-sm-3 col-form-label my-1">
    Onsite Travelled
  </label>
  <div className="col-sm-3 my-1">
    <select
      id="id"
      name="val5"
       style={{ color: "green", appearance: "auto" }}
      value={formData.val5}
      onChange={handleInputChange}
      className="form-control"
      required
    >
     <option value="no">No</option> 
      <option value="yes">Yes</option>
    
    </select>
  </div>
</div>

{showAdditionalRows.val5 === 'yes' && (
  <>
    <div className="form-group row my-2 d-flex">
      <label htmlFor="countries" className="col-sm-3 col-form-label my-1">
        Countries:
      </label>
      <div className="col-sm-3 my-1">
        <input
          type="text"
          name="coun"
          
          value={formData.coun}
          onChange={handleInputChange}
          className="form-control"
          id="countries"
          autoComplete=""
          required
        />
      </div>
   

    {/* <div className="form-group row my-2 d-flex"> */}
      <label htmlFor="cities" className="col-sm-2 col-form-label my-1">
        Cities:
      </label>
      <div className="col-sm-3 my-1">
        <input
          type="text"
          name="citi"
          value={formData.citi}
          onChange={handleInputChange}
          className="form-control"
          id="cities"
          autoComplete=""
          required
        />
      </div>
    </div>
    
    <div className="form-group row my-2 d-flex">
      <label htmlFor="onSiteCompanyNames" className="col-sm-3 col-form-label my-1">
        On-Site Company Names:
      </label>
      <div className="col-sm-3 my-1">
        <input
          type="text"
          name="onciti"
          value={formData.onciti}
          onChange={handleInputChange}
          className="form-control"
          id="onSiteCompanyNames"
          autoComplete=""
          required
        />
      </div>
   
    {/* <div className="form-group row my-2 d-flex"> */}
      <label htmlFor="onSiteClientsSupported" className="col-sm-2 col-form-label my-1">
        On-Site Clients Supported:
      </label>
      <div className="col-sm-3 my-1">
        <input
          type="text"
          name="onciticli"
          value={formData.onciticli}
          onChange={handleInputChange}
          className="form-control"
          id="onSiteClientsSupported"
          autoComplete=""
          required
        />
      </div>
    </div>
  </>
)}
<h3>Previous Company Details</h3>
<div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Previous CompanyName</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="prevCompanyName"
      value={formData.prevCompanyName}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Prev Company ID</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="id1"
      value={formData.id1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>


  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Prev Company Location</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="location"
      value={formData.location}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">No.of Years Worked</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="workedYears"
      value={formData.workedYears}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>


  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Duration From</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="date"
      name="prevFromDate"
      value={formData.prevFromDate}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">To</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="date"
      name="prevToDate"
      value={formData.prevToDate}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>

  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Role</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="role"
      value={formData.role}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Designation</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="designation"
      value={formData.designation}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>




  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">CTC (INR LPA)</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="ctc"
      value={formData.ctc}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>


  <div className="form-group row my-2 d-flex">
  <label htmlFor="id" className="col-sm-3 col-form-label my-1">
    Previous Compny-1  Details
  </label>
  <div className="col-sm-3 my-1">
    <select
      id="prev"
      name="id12"
       style={{ color: "green", appearance: "auto" }}
      value={formData.id12}
      onChange={handleInputChange}
      className="form-control"
      required
    >
      <option value="no">No</option>
      <option value="yes">Yes</option>
      
    </select>
  </div>
</div>









  {showAdditionalRows1.id12 === 'yes' && (

<>

    <h3>Previous Company-1 Details</h3>

<div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Previous CompanyName</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="prevCompanyName1"
      value={formData.prevCompanyName1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Prev Company ID</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="id11"
      value={formData.id11}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>


  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Prev Company Location</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="location1"
      value={formData.location1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">No.of Years Worked</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="workedYears1"
      value={formData.workedYears1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>


  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Duration From</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="date"
      name="prevFromDate1"
      value={formData.prevFromDate1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">To</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="date"
      name="prevToDate1"
      value={formData.prevToDate1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>

  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">Role</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="role1"
      value={formData.role1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  {/* <div className="form-group row my-2 d-flex"> Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-2 col-form-label my-1">Designation</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="designation1"
      value={formData.designation1}
      onChange={handleInputChange}
      className="form-control"
      id="languages"
      autoComplete=""
      required
    />
  </div>
  </div>




  <div className="form-group row my-2 d-flex"> {/* Add my-2 class and d-flex class here */}
  <label htmlFor="expertise" className="col-sm-3 col-form-label my-1">CTC (INR LPA)</label> {/* Add my-1 class here */}
  <div className="col-sm-3 my-1"> {/* Add my-1 class here */}
    <input
      type="text"
      name="ctc1"
      value={formData.ctc1}
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
       




    
        <div className="form-group row">
          <div className="offset-sm-3 col-sm-9">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <br/>  <br/>
      <div className="text-center">

        <a href="/reg" className="btn btn-secondary">Go Back</a>
      </div>
    </div>
  </div>
</div>

  );
};

export default Application;
