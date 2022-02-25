import React, { useState, useContext } from "react";

var AppContext = React.createContext()

export default function GrandGrandParent() {
    var [nativeVillage] = useState("Bihar");
    return (
        <AppContext.Provider value={nativeVillage}>
            <h1>This is Grand Grand Parent {nativeVillage}</h1><hr/>
            <GrandParent></GrandParent>
        </AppContext.Provider>
    )
}

function GrandParent() {
    return (
        <div>
            <h1>This is Grand Parent</h1><hr/>
            <Parent></Parent>
        </div>
    )
}

function Parent() {
    return (
        <div>
            <h1>This is Parent</h1><hr/>
            <Children></Children>
        </div>
    )
}

function Children() {
    return (
        <div>
            <h1>This is Children</h1><hr/>
            <GrandChildren></GrandChildren>
        </div>
    )
}

function GrandChildren() {
    var dataConsumer = useContext(AppContext);
    debugger;
    return (
        <div>
            <h1>This is Grand Children {dataConsumer}</h1><hr/>
        </div>
    )
}