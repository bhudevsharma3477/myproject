import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGlobalContext } from "../ContextData";

const SelectTag = ({options, name}) => {

    const {onchange_handler, ...state} = useGlobalContext();    
    
    return (
        <>
            <FormControl className="select">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={name}
                    value={state.trip_details_option_value}
                    onChange={onchange_handler}
                >
                    {
                        options.map((value, index) => {
                            return <MenuItem key={index + 1} value={value}>{value}</MenuItem>
                        })
                    }
                
                </Select>
            </FormControl>
        </>
    );
}

export default SelectTag;