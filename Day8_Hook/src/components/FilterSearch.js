import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import React, { useState } from 'react';

export default function FilterSearch(props){
    var [searchTerm, setSearchTerm]=useState("");
    return (
        <div>
            <h2><center>Employee List</center></h2><br/>
            <p><center><input type="text" placeholder="Search..." value={searchTerm} onChange={(event)=>{setSearchTerm(event.target.value);}}/></center></p>
            {props.empList.map((val)=>{
                if(searchTerm==""){
                    return <EmployeeDetailsComponent {...val}></EmployeeDetailsComponent>
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return <EmployeeDetailsComponent {...val}></EmployeeDetailsComponent>
                }
            })}
        </div>  
    )
}
