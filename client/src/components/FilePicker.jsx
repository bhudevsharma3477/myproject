import React from "react";
import { TextField } from "@mui/material";

const FilePicker = () => {
    return(
        <>
        <TextField
              sx={{ width: "100%" }}
              type="file"
              autoComplete="none"
            />
        </>
    );
}

export default FilePicker;