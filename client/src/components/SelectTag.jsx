import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";

const SelectTag = () => {

    return (
        <>
            <InputLabel required id="demo-simple-select-label">age</InputLabel>
            <Select className="select" labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"age"}
                onChange={"onchange"}>
                <MenuItem value={10}>ten</MenuItem>
                <MenuItem value={20}>twenty</MenuItem>
                <MenuItem value={30}>thirty</MenuItem>
            </Select>
        </>
    );
}

export default SelectTag;