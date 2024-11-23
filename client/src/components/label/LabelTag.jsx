import React from "react";
import { InputLabel, Typography } from "@mui/material";
import label_styles from "./label_styles";

const LabelTag = ({ name, required }) => {
    return (
        <>
            <InputLabel sx={label_styles.inputlabel} required={required}>{name}</InputLabel>
        </>
    );
}

export default LabelTag;