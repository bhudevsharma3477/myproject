import React from "react";
import { Button } from "@mui/material";
const ShipmentsDocumentation = (props) => {
    return(
        <>
        <label htmlFor="">{props.label_name}: <span>(optional)</span></label>
        

<Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
    
  />
</Button>

        </>
    );
}

export default ShipmentsDocumentation;