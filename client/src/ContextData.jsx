import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextData = ({children}) => {

    const [trip_details_data, set_trip_details_data] = useState("ACBD");
    const [accordion_icon, set_accordion_icon] = useState(true);
    const [save_data_options, set_save_data_options] = useState(false);

    let name;
    let value;

    const onchange_handler = (event) => {
        name = event.target.name;
        value = event.target.value;
        console.log(name, value);
        
    }
   

    const trip_details_onchange = (event) => set_trip_details_data(event.target.value);
    const accordion_icon_fn = () => set_accordion_icon(!accordion_icon);
    const save_data_fn = () => set_save_data_options(!save_data_options);

    return <Context.Provider value={{save_data_options, save_data_fn, trip_details_data, trip_details_onchange, accordion_icon, accordion_icon_fn}}>{children}</Context.Provider>
}

const useGlobalContext = () => useContext(Context);

export {ContextData, Context, useGlobalContext};