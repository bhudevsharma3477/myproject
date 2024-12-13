import React, { createContext, useContext, useReducer } from "react";
import initial_states from "./initial_states";
import reducer from "./Reducer";

// creating context api
const Context = createContext();

// provider component for sending state to all components
const AppProvider = ({ children }) => {

    // useReducer hook
    const [state, dispatch] = useReducer(reducer, initial_states);

    // function of getting values of textfield component and select component
    const input_and_select_onchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        return dispatch({type: "INPUT_AND_SELECT_ONCHANGE", payload: {name, value}});
    }

    // function of getting value of autocomplete component
    const autocomplete_onchange = (new_value, name) => {
        return dispatch({type: "AUTOCOMPLETE_ONCHANGE", payload: {name, new_value}});
    }
    
    return (
        <Context.Provider
            value={{
                ...state,
                input_and_select_onchange,
                autocomplete_onchange
            }}>
            {children}
        </Context.Provider>
    );
}

// global custom hook for sharing states with all components
const useGlobalContext = () => useContext(Context);

export {AppProvider, useGlobalContext};