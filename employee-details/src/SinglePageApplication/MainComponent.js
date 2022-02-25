import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import EmployeeApiComponent from "../components/EmployeeApiComponent";
import UpdateComponent from "./UpdateComponent";
import PostComponent from "./PostComponent";

export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Shaifali"
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                </div>
            </BrowserRouter>
        )
    }
}

function ContentComponent() {
    return (
        <div style={{border: "1px solid red", padding: "10px", margin: "10px", height: "600px", overflow: "auto"}}>
            <nav>
            <Link style={{margin: "10px"}} to="post">Post</Link>
            </nav>
            <Route exact path="/" component={EmployeeApiComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
            <Route exact path="/update/:eid" component={UpdateComponent}></Route>
            <Route exact path="/post" component={PostComponent}></Route>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div>
            <h1>Employee with React</h1>
            <nav>
                <Link style={{margin: "10px"}} to="/">Home</Link>
                <Link style={{margin: "10px"}} to="help">Help</Link>
                <Link style={{margin: "10px"}} to="about">About</Link>
            </nav>
        </div>
    )
}

function AboutComponent() {
    return <h3>This is About Component</h3>
}

function HelpComponent() {
    return <h3>This is Help Component</h3>
}

