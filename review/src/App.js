import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson ] = useState(data);
    
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person}/>
    </div>);
};

const SubComp1 = (props) => {
    const { person } = props;
    
    return (<div className="component">
        <h1>SubComp1</h1>
        <p>{`${person.name.title} ${person.name.first} ${person.name.last}`}</p>
        <SubComp2 person={person}/>
    </div>)
}

const SubComp2 = (props) => {
    const { person } = props;

    return (<div className="component">
        <h1>SubComp2</h1>
        <SubComp3 person={person}/>
    </div>)
}

const SubComp3 = (props) => {
    const {person} = props;
    console.log(person);
    return (<div className="component">
        <h1>SubComp3</h1>
    </div>)
}

export default App;