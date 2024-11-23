import React from "react";
import options from "../options";
import LabelTag from "../components/label/LabelTag";
import SelectTag from "../components/select/SelectTag";
import InputTag from "../components/input/InputTag";
import FilePicker from "../components/file picker/FilePicker";
import SearchBar from "../components/searchbar/SearchBar"

const Page1 = () => {

    return (
        <>
            <div className="form_1">
                <div className="container">
                    <form onSubmit={""}>
                    <LabelTag required={true} name="Trip Number" />
                 <div className="row">
                    <div className="col">
                    <SelectTag options={options} />
                    </div>
                    <div className="col">
                        <InputTag />
                    </div>
                 </div>
                        
                      
                        <LabelTag required={true} name="U.S. Port of Arrival" />
                        <SearchBar options={options} />
                        <LabelTag required={true} name="Estimated Arrival Date and Time" />
                        <LabelTag name="Truck" />
                        <LabelTag name="Trailer" />
                        <LabelTag name="Driver" />
                        <LabelTag name="Upload Shipments (JSON)" />
                        <FilePicker />
                        <LabelTag name="Upload Documentation" />
                        <FilePicker />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page1;