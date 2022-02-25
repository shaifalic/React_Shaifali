import React from 'react';
import Axios from "axios";
import { useState} from 'react';

export default function EmployeePostComponentHook(){
    var [eid, seteid] = useState(0);
    var [ename, setename] = useState('');
    var [designation, setdesignation] = useState('');
    var [salary, setsalary] = useState(0);

    var postdata={
        eid:parseInt(eid,10),
        ename:ename,
        designation:designation,
        salary:parseInt(salary,10)
    }
    function AddEmployee(){
        Axios.post("https://localhost:5001/api/Employee",postdata).then((response) => {
            alert("Employee is Added")
        })
    }
    
    return (
        <div>
            <h2>Add an Employee</h2>
            <div>
                <form onSubmit={AddEmployee}>
                    <label>Empid: </label>
                    <input type="number" name="eid" onChange={(e) => seteid(e.target.value)} /><br></br>
                    <label>EmpName: </label>
                    <input type="text" name="ename" onChange={(e) => setename(e.target.value)} /><br></br>
                    <label>EmpDesignation: </label>
                    <input type="text" name="designation" onChange={(e) => setdesignation(e.target.value)} /><br></br>
                    <label>EmpSalary: </label>
                    <input type="number" name="salary" onChange={(e) => setsalary(e.target.value)} /><br></br><br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}