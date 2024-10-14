import React from "react";
import SearchInput from "../components/SearchInput";
import FormLabelText from "../components/FormLabelText";

const Form2 = () => {
    return(
        <>
        <FormLabelText label_helper_text="" label_text="shipment type" />
        <FormLabelText label_helper_text="" label_text="shipment control number" />
        <FormLabelText label_helper_text="" label_text="province of loading" />
        
        <FormLabelText label_helper_text="(optional)" label_text="attached to trip number" />
        <SearchInput placeholder_name="Enter Attached Trip Number" input_helper_text="Used to attach shipment to ACE eManifest (leave blank for u..." />

        <FormLabelText label_helper_text="" label_text="shipper" />
        <SearchInput placeholder_name="Name or Address" input_helper_text="" />

        <FormLabelText label_helper_text="" label_text="consignee" />
        <SearchInput placeholder_name="Name or Address" input_helper_text="" />

        <FormLabelText label_helper_text="(optional)" label_text="broker" />
        <SearchInput placeholder_name="Name or Filer Code" input_helper_text="" />

        <FormLabelText label_helper_text="(optional)" label_text="upload documentation" />
        <FormLabelText label_helper_text="" label_text="is fax service billable" />
        </>
    );
}

export default Form2;