import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGlobalContext } from "../ContextData";

const SelectInput = () => {

    const {trip_details_data, trip_details_onchange} = useGlobalContext();

    return (
        <>
            <FormControl className="trip_details_select">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={trip_details_data}
                    onChange={trip_details_onchange}
                >
                    <MenuItem value={"ACBD"}>ACBD</MenuItem>
                    <MenuItem value={"OPTION 2"}>OPTION 2</MenuItem>
                    <MenuItem value={"OPTION 3"}>OPTION 3</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default SelectInput;