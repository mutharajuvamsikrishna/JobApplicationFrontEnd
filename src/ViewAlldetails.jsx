import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link,useLocation } from "react-router-dom";
import "./ViweAll.css";
import {
  
  AiOutlineFullscreen,
  AiOutlineCompress,
} from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [response, setResponse] = useState("");
  const [id, setId] = useState("");
  const [notice, setNotice] = useState("");
  const [id12, setId12] = useState("");
  const [val5, setVal15] = useState("");
  const [culocation, setCulocation] = useState("");
  const [prelocation, setPrelocation] = useState("");
  const [immi, setImmi] = useState("");
  const location =useLocation();
   const email=location.state.data.email
   const data={
    email:email
  }
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios
      .get("http://localhost:1279/req")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit2 = (regno) => {
    const data = {
      regno: regno,
    };
    navigate("/adminedit", { state: { data: data } });
  };
  const confirmDelete = (regno) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteUser(regno);
    }
  };

  const deleteUser = (regno) => {
    axios
      .delete(`http://localhost:1279/delete?regno=${regno}`)
      .then((response) => {
        alert("Deleted SucessFully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit1 = () => {
    axios
      .get(`http://localhost:1279/search?query=${searchQuery}`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const expand = (regno) => {
    setResponse(regno);
  };

  const expand1 = (regno) => {
    setResponse();
  };

  const handleSubmit = () => {
    if (id === "Sr JAVA Dev Jun23") {
      const filterData = employees.filter(
        (employee) => employee.id === "Sr JAVA Dev Jun23"
      );

      setEmployees(filterData);
    }
    if (id === "Sr PYTHON Dev Jun23") {
      const filterData = employees.filter(
        (employee) => employee.id === "Sr PYTHON Dev Jun23"
      );

      setEmployees(filterData);
    }
    if (id === "Sr ReactJS Dev Jun23") {
      const filterData = employees.filter(
        (employee) => employee.id === "Sr ReactJS Dev Jun23"
      );

      setEmployees(filterData);
    }
  };
  const handleSubmit3 = () => {
    if (notice === "15") {
      const filterData = employees.filter(
        (employee) => employee.notice === "15"
      );

      setEmployees(filterData);
    }
    if (notice === "30") {
      const filterData = employees.filter(
        (employee) => employee.notice === "30"
      );

      setEmployees(filterData);
    }
    if (notice === "45") {
      const filterData = employees.filter(
        (employee) => employee.notice === "45"
      );

      setEmployees(filterData);
    }
    if (notice === "60") {
      const filterData = employees.filter(
        (employee) => employee.notice === "60"
      );

      setEmployees(filterData);
    }
    if (notice === "75") {
      const filterData = employees.filter(
        (employee) => employee.notice === "75"
      );

      setEmployees(filterData);
    }
  };
  const handleSubmit4 = () => {
    if (immi === "yes") {
      const filterData = employees.filter(
        (employee) => employee.immi === "yes"
      );

      setEmployees(filterData);
    }
    if (immi === "no") {
      const filterData = employees.filter((employee) => employee.immi === "no");

      setEmployees(filterData);
      console.log(filterData);
    }
  };

  const handleSubmit5 = () => {
    if (val5 === "yes") {
      const filterData = employees.filter(
        (employee) => employee.val5=== "yes");
      setEmployees(filterData);
    }
    if (val5 === "no") {
      const filterData = employees.filter(
        (employee) => employee.val5=== "no");
      console.log(filterData)
      setEmployees(filterData);
    }
  }
    const handleSubmit6 = () => {
      if (id12 === "yes") {
        const filterData = employees.filter(
          (employee) => employee.id12=== "yes");
        setEmployees(filterData);
      }
      if (id12==="no") {
        const filterData = employees.filter(
          (employee) => employee.id12=== "no");
        setEmployees(filterData);
      }
     
    };
  const handleSubmitprofile=()=>{
    navigate("/adminprofile", { state: { data: data } });

  }
  const handleSubmitView=()=>{
    navigate("/ViewAllPersonal", {state:{data:data}} )
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
    onClick={handleSubmitprofile}
  >
    <CgProfile
      style={{
        height: "50px",
        width: "50px",
        color:"blue"
      }} />
  </div>
   
    <div className="id6">
    <br />
    <br /> <br />

    <Link to="/piechart" state={{ employees }}>
      Show Graphical Representation
    </Link>
    </div>
      <br />
      <br />
      <br />
      <br />
      <h2 className="text-center">Employees List</h2>
      <h3 className="text-center">No of Applications {employees.length}</h3>

      <br />
      <div className="search">
        <center>
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Universal Search</label>
            <br />
            <input
              type="text"
              name="query"
              placeholder="Search Query"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button onClick={(event) => handleSubmit1()}>Search</button>
            <input
              type="reset"
              value="Reset"
              onClick={() => setSearchQuery("")}
            />
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Job ID</label>
            <br />
            <select value={id} onChange={(event) => setId(event.target.value)}>
              <option value="">Select an option</option>
              <option value="Sr JAVA Dev Jun23">Sr JAVA Dev Jun23</option>
              <option value="Sr PYTHON Dev Jun23">Sr PYTHON Dev Jun23</option>
              <option value="Sr ReactJS Dev Jun23">Sr ReactJS Dev Jun23</option>
            </select>
            <button onClick={handleSubmit}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Notice Period</label>
            <br />
            <select
              value={notice}
              onChange={(event) => setNotice(event.target.value)}
            >
              <option value="">Select an option</option>

              <option value="15">15 </option>
              <option value="30">30 </option>
              <option value="45"> 45</option>
              <option value="60"> 60</option>
              <option value="75">75 </option>
            </select>
            <button onClick={handleSubmit3}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Immidiate Joiner</label>
            <br />
            <select
              value={immi}
              onChange={(event) => setImmi(event.target.value)}
            >
              <option value="">Select an option</option>

              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <button onClick={handleSubmit4}>Search</button>
          </form>
        
          <br />
          <br />
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label> Onsite Travelled</label>
            <br />
            <select
              value={val5}
              onChange={(event) => setVal15(event.target.value)}
            >
              <option value="">Select an option</option>

              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <button onClick={handleSubmit5}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: "inline-block" }}
          >
            <label>Experience In Previous Company</label>
            <br />
            <select
              value={id12}
              onChange={(event) => setId12(event.target.value)}
            >
              <option value="">Select an option</option>

              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <button onClick={handleSubmit6}>Search</button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button className="btn btn-primary" onClick={handleSubmitView}>
         View Personal Details
        </button>
        </center>
      </div>

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
                      <th>Delete</th>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={() => confirmDelete(emp.regno)}
                        >
                          Delete
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
      <br />
      <br />
    </div>
  );
};

export default ListEmployee;
