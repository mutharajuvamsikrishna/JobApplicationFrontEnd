import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation,Link } from "react-router-dom";
import {

  AiOutlineFullscreen,
  AiOutlineCompress,
} from "react-icons/ai";
import "./ViweAll.css";
import { CgProfile } from 'react-icons/cg';
const ViewProApplication = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const location = useLocation();
  const email1 = location.state.data.email;
  const email = location.state.data.email;
const data={
  email:email
}
  useEffect(() => {
    fetchEmployees();
  }, [email1]);

  const fetchEmployees = () => {
    axios
      .get("http://localhost:1279/req")
      .then((response) => {
        // Assuming response.data is an array of employee objects with an 'email' property
        const filterData = response.data.filter(
          (employee) => employee.email === email1
        );
        setEmployees(filterData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit2 = (regno) => {
    const data = {
      regno: regno,
    };
    navigate("/useredit", { state: { data: data } });
  };

  const expand = (regno) => {
    setResponse(regno);
  };

  const expand1 = (regno) => {
    setResponse();
  };
const handleSubmit3=()=>{
  navigate("/profile", { state: { data: data } });

}
const handleSubmitView=()=>{
  navigate("/viewpersonal", {state:{data:data}} )
  }
  return (
    <div className="id1">
      <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={handleSubmit3}
    >
      <CgProfile
        style={{
          height: "50px",
          width: "50px",
          color:"blue"
        }} />
    </div>
      <br />
      <br /><br />
      <br />
      <br />
      <br />


      <h2 className="text-center">View Professional Details</h2>
      <h3 className="text-center">No of Customers {employees.length}</h3>
      <br/>
      <button className="btn btn-primary" onClick={handleSubmitView}>
         View Personal Details
        </button>
        <br/><br/>
       <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <React.Fragment key={emp.regno}>
                <tr>
                  <th>Application ID</th>
                  <td>{emp.regno}</td>
                  <th>Application Status</th>
                  <td>{emp.expy}</td>
                  <th>ONiE Soft Job ID</th>
                  <td>{emp.id}</td>
                
                </tr>
                {response !== emp.regno && (
                  <tr className="text-center">
                    <td></td>

                    <td>
                      <AiOutlineFullscreen
                        onClick={() => expand(emp.regno)}
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                      />
                    </td>
                  </tr>
                )}

                <tr>
                <th>Email</th>
                  <td>{emp.email}</td>
                  
                  <th>Duration From</th>
                      <td>{emp.sdate}</td>
                      <th>Duration To</th>

                      <td>{emp.edate}</td>
                </tr>
                <br />
                <br />
                <br />
                {response === emp.regno && (
                  <>
                    <tr className="text-center">
                      <td></td>

                      <td>
                        <AiOutlineCompress
                          onClick={() => expand1(emp.mainemail)}
                          style={{
                            height: "30px",
                            width: "30px",
                          }}
                        />
                      </td>
                    </tr>
                    
                    <tr>
                    <th>Notice Period</th>
                  <td>{emp.notice}</td>
                      <th>Relevant IT/SW Experience In Years</th>

                      <td>{emp.rexpy}</td>

                      <th>LWD (If Resigned)</th>
                      <td>{emp.lwd}</td>
                    </tr>

                    <tr>
                      <th>Immediate Joiner</th>
                      <td>{emp.immi}</td>
                      <th>Domain</th>

                      <td>{emp.domain}</td>
                      <th>Expertise</th>
                      <td>{emp.expertise}</td>

                    </tr>

                    <tr>
                      
                      <th>Primary Skills</th>
                      <td>{emp.pskills}</td>
                    
                      <th>Current CTC </th>
                      <td>{emp.cuctc}</td>
                      <th>Expected CTC</th>

                      <td>{emp.expctc}</td>
                    </tr>

                    <tr>
                      <th>LinkedIn Profile Link</th>
                      <td>{emp.link}</td>
                      <th>Current Location</th>

                      <td>{emp.cuctc}</td>
                      <th>Preferred Location</th>
                      <td>{emp.prelocaion}</td>
                    </tr>

                    <tr>
                     
                      <th>Languages</th>
                      <td>{emp.languages}</td>
                    
                      <th>Frameworks</th>
                      <td>{emp.frameworks}</td>

                      <th>Tools</th>
                      <td>{emp.tools}</td>
                    </tr>
                    <tr>
                      <th>Databases</th>
                      <td>{emp.databases1}</td>
                      <th>Servers</th>

                      <td>{emp.servers}</td>
                      <th>Cloud</th>
                      <td>{emp.cloud}</td>
                    </tr>

                    <tr>
                     
                      <th>On-Site travelled Yes/No</th>
                      <td>{emp.val5}</td>
                    
                      <th>Countries</th>
                      <td>{emp.coun}</td>
                      <th>Cities</th>

                      <td>{emp.citi}</td>
                    </tr>

                    <tr>
                      <th>On-Site Company Names</th>
                      <td>{emp.onciti}</td>
                      <th>Clients Supported</th>
                      <td>{emp.onciticli}</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td colSpan="2">
                        <h6>Previous Company-1 Details</h6>
                      </td>
                    </tr>
                    <tr>
                      <th>Previous Company-1</th>
                      <td>{emp.prevCompanyName}</td>
                      <th>Employee ID</th>
                      <td>{emp.id1}</td>
                      <th>Location</th>
                      <td>{emp.location}</td>
                    </tr>
                    <tr>
                      
                      <th>Worked Years</th>
                      <td>{emp.workedYears}</td>
                    
                      <th>Duration From</th>
                      <td>{emp.prevFromDate}</td>
                      <th>To</th>
                      <td>{emp.prevToDate}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td colSpan="2">
                        <h6>Previous Company-2 Details</h6>
                      </td>
                    </tr>
                    <tr>
                      <th>Previous Company-2</th>
                      <td>{emp.prevCompanyName1}</td>
                      <th>Employee ID</th>
                      <td>{emp.id11}</td>
                      <th>Location</th>
                      <td>{emp.location1}</td>
                    </tr>
                    <tr>
                     
                      <th>Worked Years</th>
                      <td>{emp.workedYears1}</td>
                    
                      <th>Duration From</th>
                      <td>{emp.prevFromDate1}</td>
                      <th>To</th>

                      <td>{emp.prevToDate1}</td>
                    </tr>
                    <tr>
                      <th>Edit</th>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleSubmit2(emp.regno)}
                        >
                          Edit
                        </button>
                      </td>
                      
                    </tr>
                    <br />
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

      </div>
      
      <center>
     
<Link to="/loginsucess" state={{data}}>Go Back</Link>
      </center>

    </div>
  );
};

export default ViewProApplication;
