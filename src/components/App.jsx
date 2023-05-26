import React, { useState } from 'react';
import "./App.css";
import { TreeWindow } from "./TreeWindow/TreeWindow.jsx";
import { TreeControl } from "./TreeControl/TreeControl.jsx";
import {TreeEstruc} from "./TreeEstru/TreeEstruc.jsx";




export const App = () => {

    console.log("--------- Modulo App ---------");
    const [add,setAdd] = useState(0);
    const [del,setDel] = useState([]);
    const [build,setBuild] = useState(false);
    const [err,setErr] = useState(false);
    console.log("Traido desde Control a app:"+add);
    console.log("Traido desde Control a app:"+del);
    console.log("--------- FIN Modulo ---------");
    


    
    

    return (
        <div className='App'>
            <div className='main--container'>
            <TreeWindow add={add} build={build} setBuild={setBuild} err={err} setErr={setErr} setAdd={setAdd} setDel={setDel}></TreeWindow>
            <TreeControl setAdd={setAdd} setDel={setDel} add={add} del={del} setErr={setErr} setBuild={setBuild} build={build} err={err}></TreeControl>
            <TreeEstruc add={add} ></TreeEstruc>

            </div>
        
        </div>
    );
}

export default App;
