import React from "react";
import FormLabelText from "../components/FormLabelText";
import SearchInput from "../components/SearchInput";
import InputText from "../components/InputText";

const Form3 = () => {
    return(
        <>
        <FormLabelText label_helper_text="" label_text="loaded on" />
        
        <FormLabelText label_helper_text="" label_text="description" />
        <SearchInput placeholder_name="" input_helper_text="" />

        <FormLabelText label_helper_text="" label_text="quantity" />
        <InputText />

        <FormLabelText label_helper_text="" label_text="weight" />
        <InputText />
        
        <FormLabelText label_helper_text="" label_text="marks and numbers" />
        <InputText /><InputText /><InputText /><InputText />
        
        <FormLabelText label_helper_text="" label_text="hazmat code" />
        <SearchInput placeholder_name="" input_helper_text="" />

        <FormLabelText label_helper_text="" label_text="emergency contact name" />
        <InputText />
        
        <FormLabelText label_helper_text="" label_text="contact number" />
        <InputText />

        <FormLabelText label_helper_text="" label_text="contact email" />
        <InputText />
        </>
    );
}

export default Form3;