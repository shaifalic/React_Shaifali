import "../styles/EmployeeDetailsComponentStyle.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import EmployeeUpdateComponentHook from "../HookComponent/EmployeeUpdateComponentHook";

export default function EmployeeDetailsComponent(props) {

    var styleObject =  {
        containerStyle: {
            width: "18rem", 
            margin: "20px",
            display: "inline-block"
        }, headerStyling: {
            color: "aqua"
        }, buttonStyle: {
            color: "white",
            marginLeft: "5px"
        }
    };

    return (
        <BrowserRouter>
          <div className="card" style={styleObject.containerStyle}>
              <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <div>
                    <div>
                        <p className="card-text">Employee ID: <b>{props.eid}</b> <br></br>Employee Name: <b>{props.ename}</b> <br></br> Employee Designation: <b>{props.designation}</b><br></br> Employee Salary: <b>{props.salary}</b></p>
                    </div>
                    <input type="button" style={styleObject.buttonStyle} id={props.eid} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
                    <Route exact path= {"../HookComponent/EmployeeUpdateComponentHook/:props.eid"} ><button className="btn btn-warning">Update</button></Route>
                  </div>
              </div>
          </div>
          </BrowserRouter>
    )
}