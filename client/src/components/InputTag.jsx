import React from "react";
import { TextField } from "@mui/material";
import { useGlobalContext } from "../ContextData";

const InputTag = ({name, type, placeholder, value}) => {
    const {onchange_handler} = useGlobalContext();
    
    return (
        <>
            <TextField
                type={type}
                autoComplete="none"
                className="number"
                placeholder={placeholder}
                onChange={onchange_handler}
                value={value}
                name={name}
            />
        </>
    );
}

export default InputTag;