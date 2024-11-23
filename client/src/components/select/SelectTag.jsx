import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import select_styles from "./select_styles";
import { UnfoldMoreRounded } from "@mui/icons-material";
import { PopoverPaper } from "@mui/material";

const SelectTag = ({ options }) => {
    const [data, setdata] = useState("OPTION 1");
    return (
        <>
        <FormControl variant="filled">
        <Select
                sx={select_styles.select}
                size="small"
                label="Select"
                IconComponent={UnfoldMoreRounded}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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
            </Select>
        </FormControl>
        </>
    );
}

export default SelectTag;