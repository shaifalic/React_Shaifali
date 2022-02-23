import React, { useLayoutEffect } from 'react';
import Axios from "axios";

export default class EmployeePostComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: [],
            Empid:'',
            EmpName:'',
            EmpDesignation:'',
            EmpSalary:''
        }
    }
    debugger;
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    addEmployee = (event) => {
        debugger;
        
        const data1={Eid:this.state.Empid, Ename:this.state.EmpName,Designation:this.state.EmpDesignation,Salary:this.state.EmpSalary};
        alert(data1.Eid);
        Axios.post("https://localhost:5001/api/Employee",data1).then(response => {
            console.log(response)
            alert("hujk");
            this.getData();
        })
    }

    render() {
        return (
            <div>
                <h2>Add an Employee</h2>
                <div>
                    <form onSubmit={this.addEmployee}>
                        <label>Empid: </label>
                        <input type="number"  name="Empid" onChange={this.changeHandler} /><br></br>
                        <label>EmpName: </label>
                        <input type="text"  name="EmpName" onChange={this.changeHandler} /><br></br>
                        <label>EmpDesignation: </label>
                        <input type="text"  name="EmpDesignation" onChange={this.changeHandler} /><br></br>
                        <label>EmpSalary: </label>
                        <input type="number"  name="EmpSalary" onChange={this.changeHandler} /><br></br><br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }

    
    
    getData = () => {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee");
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }

    componentDidMount() {
        this.getData();
    }
}
debugger;