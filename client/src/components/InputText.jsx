import React from "react";
import { TextField } from "@mui/material";

const InputText = () => {
    return(
        <>
        <TextField
              sx={{ width: "70%" }}
              id="contact phone number"
              type="text"
              autoComplete="none"
            />
        </>
    );
}

export default InputText;