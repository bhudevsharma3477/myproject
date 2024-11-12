import React, { createContext, useContext } from "react";

// creating context api
const Context = createContext();

// provider component for sending state to all components
const AppProvider = ({ children }) => {
    
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