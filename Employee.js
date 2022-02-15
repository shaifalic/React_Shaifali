function Employee() {
  
  var EmpName= "Shaifali";
  var EmpAge = 20;
  var EmpDesignation = "SDE Intern";
  
  return {
    getName : function() {
        return EmpName;
    },
    getAge : function() {
        return EmpAge;
    },
    getDesignation : function() {
        return EmpDesignation;
    }
    }
}

var emp= Employee()

console.log(emp.getName());
console.log(emp.getAge());
console.log(emp.getDesignation());