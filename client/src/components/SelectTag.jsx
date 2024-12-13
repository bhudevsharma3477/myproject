import React from "react";
import { MenuItem, TextField } from "@mui/material";
import styles from "../styles";
import { UnfoldMoreRounded } from "@mui/icons-material";
import { useGlobalContext } from "../Context";

const SelectTag = ({ options, value, name }) => {
    const {input_and_select_onchange} = useGlobalContext();
    

    return (
        <>
            <TextField
                slotProps={{ select: { IconComponent: UnfoldMoreRounded }  }}
                hiddenLabel
                variant="filled"
                select
                sx={styles.select}
                size="small"
                value={value}
                name={name}
                onChange={input_and_select_onchange}
            >
                {
                    options.map((value, index) => {
                        return (
                            <MenuItem
                                key={index + 1}
                                sx={styles.menuitem}
                                value={value}
                            >
                                {value}
                            </MenuItem>
                        )
                    })
                }
            </TextField>

        </>
    );
}

export default SelectTag;