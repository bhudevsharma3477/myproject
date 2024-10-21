import React from "react";
import LabelTag from "../components/LabelTag";
import SearchInput from "../components/SearchInput";
import InputTag from "../components/InputTag";
import SelectTag from "../components/SelectTag";
import InputHelperText from "../components/InputHelperText";
import SaveDataOptions from "../components/SaveDataOptions";
import { quantity_options } from "../select tag options/data";
import { weight_options } from "../select tag options/data";
import { loaded_on_options } from "../select tag options/data";
import { useGlobalContext } from "../ContextData";

const Form3 = () => {
    const {...state} = useGlobalContext();

    console.log(state);
    
    
    return (
        <>
            <div className="form_3">
                <div className="container">
                    <form action="">
                        <LabelTag label_helper_text="" label_text="loaded on" />
                        <SelectTag options={loaded_on_options} />

                        <LabelTag label_helper_text="" label_text="description" />
                        <SearchInput placeholder_name="" input_helper_text="" />

                        <LabelTag label_helper_text="" label_text="quantity" />
                        <div className="row gx-0">
                            <div className="col-sm-6">
                                <InputTag 
                                value={state.quantity_number_value}
                                name="quantity_number_value"
                                type="number" />
                            </div>
                            <div className="col-sm-6">
                                <SelectTag options={quantity_options} />
                            </div>
                        </div>



                        <LabelTag label_helper_text="" label_text="weight" />
                        <div className="row gx-0">
                            <div className="col-sm-6">
                                <InputTag 
                                value={state.weight_number_value}
                                name="weight_number_value"
                                type="number" />
                            </div>
                            <div className="col-sm-6">
                                <SelectTag options={weight_options} />
                            </div>
                        </div>


                        <LabelTag label_helper_text="" label_text="marks and numbers" />
                        <div className="row gx-0">
                            <div className="col-lg-3 col-sm-6">
                                <InputTag name="marks_and_numbers_value_1" value={state.marks_and_numbers_value_1} type="number" />
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <InputTag name="marks_and_numbers_value_2" value={state.marks_and_numbers_value_2} type="number" />
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <InputTag name="marks_and_numbers_value_3" value={state.marks_and_numbers_value_3} type="number" />
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <InputTag name="marks_and_numbers_value_4" value={state.marks_and_numbers_value_4} type="number" />
                            </div>
                        </div>
                        <InputHelperText input_helper_text="The written description of the markings on the outside of the packages" />
                </form>
                </div>
            </div>
            <div className="new_section">
                <div className="container-fluid">
                    <p>Hazardous Material Details (Required If Hazmat)</p>
                </div>
            </div>
            <div className="form_3">
                <div className="container">
                    <form>
                    <LabelTag label_helper_text="" label_text="hazmat code" />
                    <SearchInput placeholder_name="" input_helper_text="" />

                    <LabelTag label_helper_text="" label_text="emergency contact name" />
                    <InputTag name="emergency_contact_name" value={state.emergency_contact_name} type="text" />

                    <LabelTag label_helper_text="" label_text="contact number" />
                    <InputTag name="contact_number" value={state.contact_number} type="number" />

                    <LabelTag label_helper_text="" label_text="contact email" />
                    <InputTag name="contact_email" value={state.contact_email} type="email" />
                    <SaveDataOptions />
                </form >
            </div >
        </div >

        </>
    );
}

export default Form3;