import React, { useLayoutEffect } from 'react';
import Axios from "axios";

export default class EmployeePostComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: [],
            eid:0,
            ename:'',
            designation:'',
            salary:0
        }
    }
    debugger;
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    addEmployee = (event) => {
        debugger;
        event.preventDefault();
        let postdata={
            eid:parseInt(this.state.eid,10),
            ename:this.state.ename,
            designation:this.state.designation,
            salary:parseInt(this.state.salary,10)
        }
        alert(this.state.ename);
        Axios.post("https://localhost:5001/api/Employee",postdata).then((response) => {
            alert("worked");
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
                        <input type="number" name="eid" onChange={this.changeHandler} /><br></br>
                        <label>EmpName: </label>
                        <input type="text" name="ename" onChange={this.changeHandler} /><br></br>
                        <label>EmpDesignation: </label>
                        <input type="text" name="designation" onChange={this.changeHandler} /><br></br>
                        <label>EmpSalary: </label>
                        <input type="number" name="salary" onChange={this.changeHandler} /><br></br><br></br>
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