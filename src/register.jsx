import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [ename, setEname] = useState('');
  const [mob, setMob] = useState('');
  const [password, setPassword] = useState('');
  const [cnpassword, setCnPassword] = useState('');
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      ename: ename,
      mob: mob,
      password: password,
      cnpassword: cnpassword,
    };
    var v46= /^\d{10}$/;
    var v45=/^[a-zA-Z\s]*$/;
    var v = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*&@#]).{6,}/; 
    var v1=data.password;
    var v2= data.cnpassword;
    if(!data.ename.match(v45)){
      alert("Name Alphabets Only") 
      
      return false;
      }

   
    if (data.mob.length!=10){
      alert("Mobile Number is 10 Digits only");
      return false;
    }
    if(!data.mob.match(v46)){
      alert("Mobile Number Digits Only")
      return false;
    }
    if(!data.password.match(v)){
      alert("Password Should Minimum 6 Digits,Should have at least one uppercase and  Lowercase,One Numeric And Special Symbols Like @,&,*,#")
      return false;
    }
   if(v1!=v2){
    alert("Password doesn't Match To Confirm Password")
    return false;
   }
   setLoading(true)
    axios
    
      .post('http://localhost:1279/register', data)
     
      .then((response) => {
    
        if (response.data === "otp1") {

          console.log(response.data);
          console.log("Response data type:", typeof response.data);
        
navigate("/otp", { state: { data: data } }); // Use navigate to change the route

        } else {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
         
          navigate("/regfail");
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };
  if (loading) {
    return <div><br/><br/><br></br><br/><br/><center><h1>Loading.....</h1></center></div>;
  }
  return (
    <div style={{backgroundColor:'lightgray', minHeight:"99vh"}}>
      <center>
        <br /><br /><br />
        <div style={{backgroundColor:"whitesmoke",minHeight:"50vh",width:"40%"}}>
        <h2 style={{color:'green'}}>Register With ONiE Soft</h2>
        <br />
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
      
          <div className="form-group">
          <br/>
          <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder='Enter Email'
              required
            />
          </div>
          <div className="form-group">
          <br/>
          <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={ename}
              onChange={(e) => setEname(e.target.value)}
              placeholder='Enter Name'
              autoComplete="name"
              required
            />
          </div>
          <div className="form-group">
           <br/>
           <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="mob"
              value={mob}
              onChange={(e) => setMob(e.target.value)}
              autoComplete="tel"
              placeholder='Enter Mobile Number'
              required
            />
          </div>
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
              onChange={(e) => setCnPassword(e.target.value)}
              placeholder='Enter Confirm Password'
              autoComplete="off"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
        <div>
        <br/>
        <Link to="/login" style={{color:"blue"}}>Already have an account?</Link>
      </div>
        </div>
     
      </center>
    </div>
  );
};

export default Register;
