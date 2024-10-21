import React from "react";
import LabelTag from "../components/LabelTag";
import SearchInput from "../components/SearchInput";
import DateTimePicker from "../components/DateTimePicker";
import SelectTag from "../components/SelectTag";
import AccordionForm from "../components/AccordionForm";
import InputHelperText from "../components/InputHelperText";
import SaveDataOptions from "../components/SaveDataOptions";
import InputTag from "../components/InputTag";
import { trip_details_options } from "../select tag options/data";
import { useGlobalContext } from "../ContextData";

const Form1 = () => {
  const {...state} = useGlobalContext();
  return (
    <>
      <div className="form_1">
        <div className="container">
          <form>

            <LabelTag label_helper_text="" label_text="trip details" />
            <div className="row gx-0">
              <div className="col-md-4 col-sm-6">
                <SelectTag name="trip_details_option_value" options={trip_details_options} />
              </div>
              <div className="col-md-8 col-sm-6">
                <InputTag value={state.trip_details_number_value} type="number" placeholder="Enter Trip Details" name="trip_details_number_value" />
              </div>
            </div>

            <LabelTag label_helper_text="" label_text="u.s. port of arrival" />
            <SearchInput name="port_of_arrival" placeholder_name="Search..." input_helper_text="" />

            <LabelTag label_helper_text="" label_text="estimated arrival date and time" />
            <DateTimePicker />

            <LabelTag label_helper_text="(optional)" label_text="truck" />
            <SearchInput name="truck" placeholder_name="Unit or Plate Number" />


            <AccordionForm accordion_name="Add Seal" />
            <AccordionForm accordion_name="Add IIT or Exemption" />

            <InputHelperText input_helper_text="Required for manifest but can be added later" />

            <LabelTag label_helper_text="(optional)" label_text="trailer" />
            <SearchInput name="trailer" placeholder_name="Unit or Plate Number" />

            <AccordionForm accordion_name="Add Seal" />
            <AccordionForm accordion_name="Add IIT or Exemption" />
            <AccordionForm accordion_name="Add Second Trailer" />

            <InputHelperText input_helper_text="Required for manifest but can be added later" />

            <LabelTag label_helper_text="(optional)" label_text="driver" />
            <SearchInput placeholder_name="Driver Name" />

            <AccordionForm accordion_name="Add Team Driver" />
            <AccordionForm accordion_name="Add Passenger" />

            <a href="#">Add Address</a>

            <InputHelperText input_helper_text="Required for manifest but can be added later" />

            <LabelTag label_helper_text="(optional)" label_text="Upload Shipments (JSON)" />
           {/* <InputTag type="file" />*/}

            <LabelTag label_helper_text="(optional)" label_text="Upload Documentation" />

           {/* <InputTag type="file" />*/}

            <SaveDataOptions />
          </form>

        </div>
      </div>
    </>
  );
}

export default Form1;