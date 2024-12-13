import React from "react";
import { InputLabel, Typography } from "@mui/material";
import styles from "../styles";

const LabelTag = ({ name, required }) => {
    return (
        <>
            <InputLabel sx={styles.label} required={required}>{name}</InputLabel>
        </>
    );
}

export default LabelTag;