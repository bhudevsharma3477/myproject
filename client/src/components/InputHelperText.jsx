import React from "react";
import { InfoOutlined } from "@mui/icons-material";

const InputHelperText = (props) => {
    return (
        <>
            <div className="input_helper_text">
                <div className="container-fluid">
                    <InfoOutlined fontSize="small" />
                    <p>{props.input_helper_text }</p>
                </div>
            </div>
        </>
    );
}

export default InputHelperText;