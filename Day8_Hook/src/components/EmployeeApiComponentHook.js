import React from 'react';
import Axios from "axios";
import { useEffect ,useState} from 'react';
import EmployeeDetailsComponent from "./EmployeeDetailsComponent"

export default function EmployeeApiComponentHook(){
    var[employeeList,setEmployeeList]=useState([]);
    
    useEffect(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee");
        dataPromise.then((response) => {
            setEmployeeList(response.data);
        })
    }, [])
    
    function GetData(){
        var dataPromise = Axios.get("https://localhost:5001/api/Employee");
        dataPromise.then((response) => {
            setEmployeeList(response.data);
        })
    }

    function DeleteEmployee(event){
        Axios.delete("https://localhost:5001/api/Employee/" + event.target.id).then(() => {
            alert("Employee is Deleted");
            GetData();
        })
    }
    return (
        <div>
            <h2>Employee List is given Below:</h2>
            {employeeList.map((employee) => {
                return <EmployeeDetailsComponent key={employee.eid} deleteEmployee={DeleteEmployee}{...employee}></EmployeeDetailsComponent>
            })}
        </div>
    )
}
