import React from "react";
import options from "../options";
import LabelTag from "../components/LabelTag";
import SelectTag from "../components/SelectTag";
import InputTag from "../components/InputTag";
import FilePicker from "../components/FilePicker";
import SearchBar from "../components/SearchBar";
import DateTimePicker from "../components/DateTimePicker";
import { useGlobalContext } from "../Context";
import SaveList from "../components/SaveList";
const Page1 = () => {
    const state = useGlobalContext();
    console.log(state);


    return (
        <>
            <div className="form_1">
                <div className="container">
                    <form autoComplete="off">
                        <LabelTag required={true} name="Trip Number" />
                        <div className="row">
                            <div className="col">
                                <SelectTag
                                    value={state.trip_select}
                                    name="trip_select"
                                    options={options}
                                />
                            </div>
                            <div className="col">
                                <InputTag
                                    value={state.trip_number}
                                    name="trip_number"
                                    type="number"
                                />
                            </div>
                        </div>
                        <LabelTag required={true} name="U.S. Port of Arrival" />
                        <div className="row">
                            <div className="col-6">
                                <SearchBar
                                    value={state.port_of_arrival}
                                    name="port_of_arrival"
                                    options={options}
                                />
                            </div>
                        </div>

                        <LabelTag required={true} name="Estimated Arrival Date and Time" />
                        <div className="row">
                            <div className="col-6">
                                <DateTimePicker />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-4 col-sm-6">
                                <LabelTag name="Truck" />
                                <SearchBar
                                    value={state.truck}
                                    name="truck"
                                    options={options}
                                />
                            </div>
                            <div className="col col-lg-4 col-sm-6">
                                <LabelTag name="Trailer" />
                                <SearchBar
                                    value={state.trailer}
                                    name="trailer"
                                    options={options}
                                />
                            </div>
                            <div className="col col-lg-4 col-sm-6">
                                <LabelTag name="Driver" />
                                <SearchBar
                                    value={state.driver}
                                    name="driver"
                                    options={options}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm-6">
                            <LabelTag name="Upload Shipments (JSON)" />
                            <FilePicker />
                            </div>
                            <div className="col col-sm-6">
                            <LabelTag name="Upload Documentation" />
                            <FilePicker />
                            </div>
                        </div>
                        <SaveList />
                       
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page1;