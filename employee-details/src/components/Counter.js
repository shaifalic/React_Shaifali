import react from "react";
import {useState, useEffect} from "react";

export default function Counter(){
    var[counter,setCounter]=useState(0);
    
    useEffect(() => {
        console.log("Hello All");
    }, [])

    useEffect(() => {
        console.log("Hello All 1");
    })

    function incrementCounter(){
        setCounter(counter+1);
        console.log(counter);
    }

    setTimeout(incrementCounter,1000);

    return(
        <div>
            <h1>Counter is: {counter}</h1>
            <input type="button" onClick={incrementCounter} value="Increment Counter"/>
        </div>
    )
}