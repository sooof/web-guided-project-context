import React, { useState } from 'react';
import data from  './data'
// console.log(data)

const App = ()=> {
    const [person, setPerson] = useState(data)
    console.log("APP ",person)
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person} setPerson={setPerson} />
    </div>);
};

const SubComp1 = (props) => {
    const {person, setPerson } = props
    console.log("SubComp1 ", person)
    return (<div className="component">
        <h1>SubComp1</h1>
        <p>{`${person.name.title} ${person.name.first}`}</p>
        <SubComp2 person={person} setPerson={setPerson} />
    </div>)
}
const SubComp2 = (props) => {
    const {person, setPerson} = props
    console.log("SubComp2 ", person)

    const handleClick = () => {
        setPerson({
            ...person,
            location: {
                street: "222",
                city: "San ",
                state: "CA",
                postcode: "94706"

            }
        });
    }
    return (<div className="component">
        <h1>SubComp2</h1>
        <button onClick={handleClick}>Change Location</button>
        <SubComp3 person={person} setPerson={setPerson} />
    </div>)
}
const SubComp3 = (props) => {
    const {person, setPerson} = props 

    const handleClick = () => {
        setPerson({
            ...person,
            name: {
                title: "222",
                first: "San ",
                last: "CA",
            }
        });
    }
    console.log("SubComp3 ", person)
    return (<div className="component">
        <h1>SubComp3</h1>
        <p>{`${person.location.street} ${person.location.scity} ${person.location.postcode}`}</p>
        <button onClick={handleClick}>Change Name</button>
    </div>)
}




export default App;