import React from "react";
import { TextField, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useGlobalContext } from "../ContextData";


const SearchInput = ({placeholder_name, input_helper_text, name}) => {

    const {onchange_handler} = useGlobalContext();
    
    return (
        <>
            <TextField
                placeholder={placeholder_name}
                fullWidth
                name={name}
                onChange={onchange_handler}
                defaultValue=""
                id="standard-bare"
                variant="outlined"
                helperText={input_helper_text}
                InputProps={{
                    endAdornment: (
                        <IconButton disabled={true}>
                            <SearchOutlined />
                        </IconButton>
                    ),
                }}
            />
        </>
    );
}

export default SearchInput;