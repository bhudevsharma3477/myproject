import React from "react";
import {Autocomplete, TextField} from "@mui/material";

const SearchBar = ({options}) => {
    return(
        <>
        <Autocomplete 
        disablePortal
        options={options}
        renderInput={(params) => <TextField {...params} />} />
        </>
    );
}

export default SearchBar;