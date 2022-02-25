import Axios from 'axios';
import React from 'react';

export default class UpdateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            eid:0,
            ename:'',
            designation:'',
            salary:0
        }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        debugger;
        return (
            <div>
                <form onSubmit={this.updateEmployee}>
                        <label>Empid: </label>
                        <input type="number" name="eid" placeholder={this.state.eid} /><br></br><br></br>
                        <label>EmpName: </label>
                        <input type="text" name="ename" placeholder={this.state.ename} onChange={this.changeHandler} /><br></br><br></br>
                        <label>EmpDesignation: </label>
                        <input type="text" name="designation" placeholder={this.state.designation} onChange={this.changeHandler} /><br></br><br></br>
                        <label>EmpSalary: </label>
                        <input type="number" name="salary" placeholder={this.state.salary} onChange={this.changeHandler} /><br></br><br></br>
                        <input type="submit" value="Update" /><br></br><br></br>
                    </form>
            </div>
        )
    }

    updateEmployee = () => {
        var putdata={
            eid:this.state.eid,
            ename:this.state.ename,
            designation:this.state.designation,
            salary:this.state.salary
        }
        Axios.put("https://localhost:5001/api/Employee/"+this.state.eid,putdata).then(()=>{
            alert("Employee Updated");  
        })   
    }

    componentDidMount() {
        debugger;
        alert(this.props.match.params.eid);
        Axios.get("https://localhost:5001/api/Employee/" + this.props.match.params.eid).then((response) => {
            this.setState({
                eid: response.data.eid,
                ename: response.data.ename,
                designation: response.data.designation,
                salary: response.data.salary
            })
        })       
    }
}