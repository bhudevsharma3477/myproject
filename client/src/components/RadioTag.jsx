import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context";
import { red } from "@mui/material/colors";

const RadioTag = ({ value, name }) => {
    const { input_and_select_onchange } = useGlobalContext();
    const redcolour = red[500];

    return (
        <>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name={name}
                    onChange={input_and_select_onchange}
                    value={value}
                >
                    <FormControlLabel
                        value="YES"
                        control={<Radio color="secondary" />}
                        label="YES" 
                    />
                    <FormControlLabel
                        value="NO"
                        control={<Radio color="secondary" />}
                        label="NO"
                    />
                </RadioGroup>
            </FormControl>
        </>
    );
}

export default RadioTag;