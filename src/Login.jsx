import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    var v = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*&@#]).{6,}/; 
    if(!data.password.match(v)){
      alert("Password Should Minimum 6 Digits,Should have at least one uppercase and  Lowercase,One Numeric And Special Symbols Like @,&,*,#")
      return false;
    }
    axios
      .post('http://localhost:1279/loginform', data)
      .then((response) => {
        if (response.data === "personaldetails1") {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
          navigate("/loginsucess", { state: { data: data } }); // Use navigate to change the route
        } else {
          console.log(response.data);
          console.log("Response data type:", typeof response.data);
        alert("Invalid credentials")
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };
const handleSubmit1=()=>{
navigate("/register")
}
  return (
    <div style={{backgroundColor:"lightyellow",minHeight:"99vh"}}>
      <center>
        <br /><br /><br /><br /><br /><br />
        <div>
        <h2>Login With ONiE Soft</h2>
        <br/>  <br/>
        <form onSubmit={handleSubmit}>
         
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='email' placeholder='Enter Your Email'style={{width:"20%"}}required />
               
            <br/>   <br/>
               
                
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='new-password'placeholder='Enter Your Password'style={{width:"20%"}} required />
             
                  <br/>  
          <br />
          <button className='btn btn-primary ' type="submit" style={{width:"10%"}}>Log In    </button>
        </form>
       
        <br/>
       <Link to="/forgetpassword">ChangePassword/ForgetPassword</Link>
       </div>
       <div>
       <br/>
<button className='btn btn-success' onClick={handleSubmit1}>Create Account</button>
       </div>
      
      </center>
    </div>
  );
};

export default Login;
