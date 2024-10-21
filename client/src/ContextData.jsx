import React, { createContext, useContext, useReducer, useState } from "react";
import reducer from "./reducer function/reducer";

const Context = createContext();

const ContextData = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, {
      trip_details_option_value: "ACBD",
      trip_details_number_value: "",
      shipment_control_number_value: "",
      quantity_number_value: "",
      weight_number_value: "",
      marks_and_numbers_value_1: "",
      marks_and_numbers_value_2: "",
      marks_and_numbers_value_3: "",
      marks_and_numbers_value_4: "",
      contact_number: "",
      emergency_contact_name: "",
      contact_email: ""
    });

  const onchange_handler = (event) => {
    const { name, value } = event.target;
     dispatch({ type: "ONCHANGE_HANDLER", payload: { name, value } });
     //dispatch({ type: "ONCHANGE_HANDLER", payload: { name, value } });
  }

  const [trip_details_data, set_trip_details_data] = useState("ACBD");
  const [accordion_icon, set_accordion_icon] = useState(true);
  const [save_data_options, set_save_data_options] = useState(false);
  const [shipment_type_data, set_shipment_type_data] = useState("PAPS");


  const trip_details_onchange = (event) => set_trip_details_data(event.target.value);
  const shipment_type_onchange = (event) => set_shipment_type_data(event.target.value);
  const accordion_icon_fn = () => set_accordion_icon(!accordion_icon);
  const save_data_fn = () => set_save_data_options(!save_data_options);

  return <Context.Provider value={{ ...state, onchange_handler, shipment_type_data, shipment_type_onchange, save_data_options, save_data_fn, trip_details_data, trip_details_onchange, accordion_icon, accordion_icon_fn }}>{children}</Context.Provider>
}

const useGlobalContext = () => useContext(Context);

export { ContextData, Context, useGlobalContext };