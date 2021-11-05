import React, { useState, createContext, useContext, useReducer } from 'react';
import data from  './data'
// console.log(data)
import { reducer,initialState,setLocation, setName } from './reducer';

const PersonContext = createContext();
console.log("PersonContext = ", PersonContext)
const DogContext = createContext();

const App = ()=> {
    const [person, dispatch]= useReducer(reducer, initialState)

    // console.log("APP ",person)
    return(
    <div className="App component">
        <h1>Main App</h1>
        <PersonContext.Provider  value= {{person, dispatch, name: "warren", arr:[1,2,3,4,5]}}>
            <DogContext.Provider value={'fidp'}>
                <SubComp1  />
            </DogContext.Provider>
        </PersonContext.Provider>
    </div>
  
    );
};

const SubComp1 = (props) => {
    const {person, name} = useContext(PersonContext)
    // const context = useContext(PersonContext)
    // console.log("context = ", context)
    console.log("context = ", name)
    return (<div className="component">
        <h1>SubComp1</h1>
        <p>{`${person.name.title} ${person.name.first}   ${name} ` }</p>
        {/* <p>{`${context.person.name.title} ${context.person.name.first}   ${context.name} ` }</p> */}
        {/* <p>{`${useContext(PersonContext).person.name.title} ${useContext(PersonContext).person.name.first}`}</p> */}
        <SubComp2  />
    </div>)
}
const SubComp2 = (props) => {
    const {person, dispatch} = useContext(PersonContext)
    console.log("SubComp2 ", person)
    const dogName = useContext(DogContext)

    const handleClick = () => {
        dispatch(
            setLocation({
                 
                    street: "222",
                    city: "San ",
                    state: "CA",
                    postcode: "94706"
                
            })
        )
        // setPerson({
        //     ...person,
        //     location: {
        //         street: "222",
        //         city: "San ",
        //         state: "CA",
        //         postcode: "94706"

        //     }
        // });
    }
    console.log(person)
    return (<div className="component">
        <h1>SubComp2</h1>
        <p> Dog name is {dogName}</p>
        <button onClick={handleClick}>Change Location</button>
        <SubComp3  />
    </div>)
}
const SubComp3 = (props) => {
    const {person, dispatch, arr} = useContext(PersonContext)

    const handleClick = () => {
        dispatch(
            setName({
                title: "222",
                first: "San ",
                last: "CA",
                
            }))
          

        // setPerson({
        //     ...person,
        //     name: {
        //         title: "222",
        //         first: "San ",
        //         last: "CA",
        //     }
        // });
    }
    console.log("SubComp3 ", person)

    console.log("arr = ", arr)
    return (<div className="component">
        <h1>SubComp3</h1>
        <p>{`${person.location.street} ${person.location.scity} ${person.location.postcode}`}</p>
        <button onClick={handleClick}>Change Name</button>
    </div>)
}




export default App;