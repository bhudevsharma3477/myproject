import React from "react";

import { TextField } from "@mui/material";

import FormLabelText from "../components/FormLabelText";
import SearchInput from "../components/SearchInput";
import DateTimePicker from "../components/DateTimePicker";
import SelectInput from "../components/SelectInput";
import AccordionForm from "../components/AccordionForm";
import InputHelperText from "../components/InputHelperText";
import FilePicker from "../components/FilePicker";
import SaveDataOptions from "../components/SaveDataOptions";

const Form1 = ({ data, handleChange }) => {





  return (
    <>
      <div className="form_1">
        <div className="container">
          <form action="">

            <FormLabelText label_helper_text="" label_text="trip details" />
            <div className="row gx-0">
              <div className="col-md-4 col-sm-6">
                <SelectInput data={data} handleChange={handleChange} />
              </div>
              <div className="col-md-8 col-sm-6">
                <TextField
                className="trip_details_number"
                  id="contact phone number"
                  type="number"
                  autoComplete="none"
                  placeholder="Enter Trip Number"
                />
              </div>
            </div>




            <FormLabelText label_helper_text="" label_text="u.s. port of arrival" />
            <SearchInput placeholder_name="Search..." input_helper_text="" />

            <FormLabelText label_helper_text="" label_text="estimated arrival date and time" />
            <DateTimePicker />

            <FormLabelText label_helper_text="(optional)" label_text="truck" />
            <SearchInput placeholder_name="Unit or Plate Number" />


            <AccordionForm accordion_name="Add Seal" />
            <AccordionForm accordion_name="Add IIT or Exemption" />

            <InputHelperText input_helper_text="Required for manifest but can be added later" />

            <FormLabelText label_helper_text="(optional)" label_text="trailer" />
            <SearchInput placeholder_name="Unit or Plate Number" />

            <AccordionForm accordion_name="Add Seal" />
            <AccordionForm accordion_name="Add IIT or Exemption" />
            <AccordionForm accordion_name="Add Second Trailer" />

            <InputHelperText input_helper_text="Required for manifest but can be added later" />

            <FormLabelText label_helper_text="(optional)" label_text="driver" />
            <SearchInput placeholder_name="Driver Name" />

            <AccordionForm accordion_name="Add Team Driver" />
            <AccordionForm accordion_name="Add Passenger" />

            <a href="#">Add Address</a>

            <InputHelperText input_helper_text="Required for manifest but can be added later" />

            <FormLabelText label_helper_text="(optional)" label_text="Upload Shipments (JSON)" />
            <FilePicker />

            <FormLabelText label_helper_text="(optional)" label_text="Upload Documentation" />

            <FilePicker />

            <SaveDataOptions />
          </form>

        </div>
      </div>
    </>
  );
}

export default Form1;