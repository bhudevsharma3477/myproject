import React, { createContext, useContext, useReducer } from "react";
import initial_states from "./initial_states";
import reducer from "./Reducer";

// creating context api
const Context = createContext();

// provider component for sending state to all components
const AppProvider = ({ children }) => {

    // useReducer hook
    const [state, dispatch] = useReducer(reducer, initial_states);
    
    return (
        <Context.Provider
            value={{
                
            }}>
            {children}
        </Context.Provider>
    );
}

// global custom hook for sharing states with all components
const useGlobalContext = () => useContext(Context);

export {AppProvider, useGlobalContext};