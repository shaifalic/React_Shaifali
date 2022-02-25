import React from 'react';
import Axios from "axios";
import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import PostComponent from '../SinglePageApplication/PostComponent';

export default class EmployeeApiComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    render() {
        return (
            <div>
                <h2>Employee List is given Below:</h2>
                <center><PostComponent></PostComponent></center>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.eid} updateEmployee={this.updateEmployee} deleteEmployee={this.deleteEmployee} {...employee}></EmployeeDetailsComponent>
                })}
            </div>
        )
    }

    deleteEmployee = (event) => {
        debugger;
        Axios.delete("https://localhost:5001/api/Employee/" + event.target.id).then(() => {
            alert("Employee is Deleted");
            this.getData();
        })
    }

    updateEmployee = (event) => {
        var employeeId = event.target.id;
        this.props.history.push("/update/" + employeeId);
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