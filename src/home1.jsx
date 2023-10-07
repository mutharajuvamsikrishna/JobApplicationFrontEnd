import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const WelcomePage = () => {
  const navigate=useNavigate();
  const bgStyle = {
    backgroundImage: 'url("https://oniesoft.com/images/oniesoft-final.png")',
    backgroundSize: 'cover',
    opacity:0.5,
    width: '100%', // Set the width of the container if needed
    height: '100vh', // Set the height of the container if needed
    position:"absolute",
    top:0,
    left:0

   // filter: "brightness(50%)"
  };
const handleNavigate=(type)=>{
  if(type==="applicants"){
navigate("/login")
  }
  else{
    navigate("/adminlogin")
  }
}
  return (
    <div style={{ backgroundColor: 'lightgreen', height: "100vh", }}>
    <div style={bgStyle}/>
      <div style={{opacity:0.8}}>
      <center>
        <br />
        <br />
        <br /> <br />
        <br />
        <h1 style={{ color: 'blue' }}>Welcome To ONiE Soft</h1>
        <br/><br/>
    
      <button className='btn btn-primary' onClick={()=>handleNavigate("applicants")}>Applicants</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn btn-primary' onClick={()=>handleNavigate("tag")}>Executive Team</button>
      </center>
      </div>
    </div>
   
  );
};

export default WelcomePage;