import { TextField } from "@mui/material";
import React from "react";
import input_styles from "./input_styles";

const InputTag = () => {
    return (
        <>
            <TextField
            autoComplete="off"
                type="number"
                sx={input_styles}
                variant="filled"
                size="small"
                label="Enter Trip Number"
            />
        </>
    );
}

export default InputTag;