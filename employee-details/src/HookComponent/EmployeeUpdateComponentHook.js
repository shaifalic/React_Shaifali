import React, { useEffect } from 'react';
import Axios from "axios";
import { useState} from 'react';
//import { Link,useLocation,useParams } from "react-router-dom";

export default function EmployeePostComponentHook(props){
    var [eid, seteid] = useState(0);
    var [ename, setename] = useState('');
    var [designation, setdesignation] = useState('');
    var [salary, setsalary] = useState(0);
    //let params = useParams();

    useEffect(() => {
        //alert(this.props.match.params.eid);
        Axios.get('https://localhost:5001/api/Employee/${props.eid}').then((response) => {
            seteid(response.data.eid);
            setename(response.data.ename);
            setdesignation(response.data.designation);
            setsalary(response.data.salary);
        })       
    }, [])
    
    function updateEmployee(){
        var putdata={
            eid:parseInt(eid,10),
            ename:ename,
            designation:designation,
            salary:parseInt(salary,10)
        }
        Axios.put('https://localhost:5001/api/Employee/${props.eid}',putdata).then(()=>{
            alert("Employee Updated");  
        })   
    }
    
    return (
        <div>
            <h2>Update the Employee</h2>
            <div>
            <form onSubmit={updateEmployee}>
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