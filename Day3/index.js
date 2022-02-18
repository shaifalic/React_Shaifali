var val

var numfun = {   
    num: val,
    set changeNum(newNum) {
    this.num = newNum;
    }
};

console.log(numfun.changeNum = '')

var ran=setInterval(randomValue,10000)

function randomValue() {
    val = Math.floor((Math.random() * 100)+1);
    document.getElementById("number").value = val;
    alert("Number entered is: "+val);
    console.log(val);
}

document.getElementById("button").onclick = function(){  
    val = document.getElementById("number").value;  
    alert("Number entered is: "+val);
    console.log(val);
}
