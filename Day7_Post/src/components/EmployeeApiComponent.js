import React from 'react';
import Axios from "axios"
import EmployeeDetailsComponent from "./EmployeeDetailsComponent"

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
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.eid}deleteEmployee={this.deleteEmployee} {...employee}></EmployeeDetailsComponent>
                })}
            </div>
        )
    }
    debugger;
    deleteEmployee = (event) => {
        debugger;
        Axios.delete("https://localhost:5001/api/Employee/" + event.target.id).then(() => {
            alert("Employee is Deleted");
            this.getData();
        })
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