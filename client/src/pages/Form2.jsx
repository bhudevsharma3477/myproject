import React from "react";
import SearchInput from "../components/SearchInput";
import LabelTag from "../components/LabelTag";
import SelectTag from "../components/SelectTag";
import InputHelperText from "../components/InputHelperText";
import SaveDataOptions from "../components/SaveDataOptions";
import { shipment_type_options } from "../select tag options/data";
import { shipment_control_number_options } from "../select tag options/data";
import { province_of_loading_options } from "../select tag options/data";
import { fax_service_billable_options } from "../select tag options/data";
import InputTag from "../components/InputTag";
import { useGlobalContext } from "../ContextData";

const Form2 = () => {
    const {...state} = useGlobalContext();
    return (
        <>
            <div className="form_2">
                <div className="container">
                    <form action="">
                        <LabelTag label_helper_text="" label_text="shipment type" />
                        <SelectTag options={shipment_type_options} />
                        <LabelTag label_helper_text="" label_text="shipment control number" />
                        <div className="row gx-0">
                            <div className="col-md-4 col-sm-6">
                                <SelectTag options={shipment_control_number_options} />
                            </div>
                            <div className="col-md-8 col-sm-6">
                                <InputTag
                                    type="number"
                                    placeholder="Enter Shipment Number"
                                    value={state.shipment_control_number_value}
                                    name="shipment_control_number_value"
                                />
                            </div>
                        </div>

                        <LabelTag label_helper_text="" label_text="province of loading" />
                        <SelectTag options={province_of_loading_options} />

                        <LabelTag label_helper_text="(optional)" label_text="attached to trip number" />
                        <SearchInput placeholder_name="Enter Attached Trip Number" />
                        <InputHelperText input_helper_text="Used to attach shipment to ACE eManifest (leave blank for u..."/>

                        <LabelTag label_helper_text="" label_text="shipper" />
                        <SearchInput placeholder_name="Name or Address" input_helper_text="" />

                        <LabelTag label_helper_text="" label_text="consignee" />
                        <SearchInput placeholder_name="Name or Address" input_helper_text="" />

                        <LabelTag label_helper_text="(optional)" label_text="broker" />
                        <SearchInput placeholder_name="Name or Filer Code" input_helper_text="" />

                        <LabelTag label_helper_text="(optional)" label_text="upload documentation" />
                       {/* <InputTag type="file" />*/}
                        <LabelTag label_helper_text="" label_text="is fax service billable" />
                        <SelectTag options={fax_service_billable_options} />
                        <SaveDataOptions />
                    </form>

                </div>
            </div>

        </>
    );
}

export default Form2;