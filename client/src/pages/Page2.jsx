import React from "react";
import LabelTag from "../components/LabelTag";
import FilePicker from "../components/FilePicker";
import SelectTag from "../components/SelectTag";
import { useGlobalContext } from "../Context";
import options from "../options";
import SearchBar from "../components/SearchBar";
import InputTag from "../components/InputTag";
import RadioTag from "../components/RadioTag";
import SaveList from "../components/SaveList";

const Page2 = () => {
    const state = useGlobalContext();
    return (
        <>
            <div className="form_2">
                <div className="container">
                    <form autoComplete="off">
                        <div className="row">
                            <div className="col col-sm-6">
                            <LabelTag required={true} name="Shipment Type" />
                            <SelectTag
                                    value={state.shipment_type}
                                    name="shipment_type"
                                    options={options}
                                />
                            </div>
                            <div className="col col-sm-6">
                            <LabelTag required={true} name="Shipment Control Number" />
                            <div className="row">
                                <div className="col col-sm-6">
                                    <SelectTag 
                                    value={state.shipment_control_select}
                                    name="shipment_control_select"
                                    options={options}
                                    />
                                </div>
                                <div className="col col-sm-6">
                                <InputTag value={state.shipment_control_no} name="shipment_control_no" type="number" />
                                </div>
                            </div>
                           
                            </div>
                        </div>
                        
                        
                        
                        <LabelTag required={true} name="Province of Loading" />
                        <div className="row">
                            <div className="col-6">
                                <SelectTag
                                    value={state.province_of_loading}
                                    name="province_of_loading"
                                    options={options}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-3">
                            <LabelTag name="Attached to Trip Number" />
                            <SearchBar
                                    value={state.attached_to_trip_no}
                                    name="attached_to_trip_no"
                                    options={options}
                                />
                            </div>
                            <div className="col col-lg-3">
                            <LabelTag required={true} name="Shipper" />
                        <SearchBar
                                    value={state.shipper}
                                    name="shipper"
                                    options={options}
                                />
                            </div>
                            <div className="col col-lg-3">
                            <LabelTag required={true} name="Consignee" />
                        <SearchBar
                                    value={state.consignee}
                                    name="consignee"
                                    options={options}
                                />
                            </div>
                            <div className="col col-lg-3">
                            <LabelTag name="Broker" />
                        <SearchBar
                                    value={state.broker}
                                    name="broker"
                                    options={options}
                                />
                            </div>
                        </div>
                        <LabelTag name="Upload Documentation" />
                        <FilePicker />
                        <LabelTag required={true} name="Is Fax Service Billable" />
                        <RadioTag value={state.fax_billable} name="fax_billable" />
                        <SaveList />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page2;