import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context";
import styles from "../styles";
import { MailRounded } from "@mui/icons-material";

const InputTag = ({ name, value, type, icon }) => {
    const { input_and_select_onchange } = useGlobalContext();

    return (
        <>
            <TextField
                type={type}
                name={name}
                value={value}
                onChange={input_and_select_onchange}
                variant="filled"
                size="small"
                hiddenLabel
                sx={styles.textfield}
                slotProps={{input: {startAdornment: <InputAdornment>{icon}</InputAdornment>}}}
            />
        </>
    );
}

export default InputTag;