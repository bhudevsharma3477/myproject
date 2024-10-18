import React from "react";
import { TextField, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";


const SearchInput = ({placeholder_name, input_helper_text}) => {
    
    return (
        <>
            <TextField
                placeholder={placeholder_name}
                fullWidth
                id="standard-bare"
                variant="outlined"
                helperText={input_helper_text}
                defaultValue=""
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