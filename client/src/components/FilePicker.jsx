import React from "react";
import {Button, TextField} from "@mui/material";
import styles from "../styles";

const FilePicker = () => {
    return(
        <>
        <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        color="secondary"
        >
            upload file
            <TextField type="file" sx={styles.file_picker} />
        </Button>
        </>
    );
}

export default FilePicker;