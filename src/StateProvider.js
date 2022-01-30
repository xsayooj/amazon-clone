//setup data layer 
//Used to track basket
import React,{createContext, useContext, useReducer} from 'react';

//This is the data layer
export const StateContext = createContext();

// build a provider 
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)} >
    {children}
    </StateContext.Provider>
);

//This is how we use it inside of component
export const useStateValue = () => useContext(StateContext);