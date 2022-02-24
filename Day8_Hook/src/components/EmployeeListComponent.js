import EmployeeDetailsComponent from "./EmployeeDetailsComponent";

export default function EmployeeListComponent(props) {
    debugger;
    return (
        <div>
            <h1>Employee List is Given Below...</h1>
            <div>
                {props.empList.map(function(employee) {
                    return (
                        <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                    )
                })}
            </div>
        </div>
    )
}