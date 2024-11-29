import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import select_styles from "./select_styles";
import { UnfoldMoreRounded } from "@mui/icons-material";

const SelectTag = ({ options }) => {
    const [data, setdata] = useState();
    return (
        <>
            <TextField
                slotProps={{ select: { IconComponent: UnfoldMoreRounded } }}
                variant="filled"
                label="Select"
                select
                sx={select_styles.select}
                size="small"
                value={data}
                onChange={(e) => setdata(e.target.value)}>
                {
                    options.map((value, index) => {
                        return (
                            <MenuItem
                                key={index + 1}
                                sx={select_styles.menuitem}
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