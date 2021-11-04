import React, { useState } from "react";
import ReactDOM from "react-dom";

import FamilyContext from './contexts/FamilyContext';

import App from "./App";

import { data } from "./data";

const Application = () => {
    const [families] = useState(data);
    const [activeFamily, setActiveFamily] = useState(families[0]);
    
    return(<App/>)
}


const rootElement = document.getElementById("root");

ReactDOM.render(<FamilyContext.Provider value={{families, activeFamily}}><Application /></FamilyContext.Provider>, rootElement);
