import React from "react";
import {Button, TextField} from "@mui/material";
import file_picker_styles from "./file_picker_styles";

const FilePicker = () => {
    return(
        <>
        <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={null}
        >
            upload file
            <TextField type="file" sx={file_picker_styles} />
        </Button>
        </>
    );
}

export default FilePicker;