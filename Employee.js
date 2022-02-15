function EmployeeDetails() {
    var name= "Shaifali";
    var age = 20;
    var designation = "SDE";
    
    return {
      name: name,
      age: age,
      designation: designation
    }
  }
  var x;
  var newEmployee = EmployeeDetails()
  
  var userName = newEmployee.name;
  var userAge = newEmployee.age;
  var userDesignation = newEmployee.designation;