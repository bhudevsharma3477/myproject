import React from "react";

const LabelTag = ({label_text, label_helper_text}) => {
    return <label htmlFor="">{label_text}: <span>{label_helper_text}</span></label>
}

export default LabelTag;