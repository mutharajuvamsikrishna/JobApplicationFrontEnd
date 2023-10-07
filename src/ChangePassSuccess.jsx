import React from 'react';
import { Link } from 'react-router-dom';

export default function ChangePassSuccess() {
  return (
    
    <div>
       <br /> <br /> <br />
      
          <div className="mt-5 text-center">
            <h1 style={{ color: 'green' }}>Password Change Successfully</h1>
            <br /> <br /> <br /> <br />
            <Link to="/login" className="btn btn-primary">
              Go Back to Login
            </Link>
          </div>
        </div>
     
  );
}
