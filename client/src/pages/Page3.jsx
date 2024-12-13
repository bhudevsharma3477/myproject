import React from "react";
import LabelTag from "../components/LabelTag";
import options from "../options";
import InputTag from "../components/InputTag";
import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../Context";
import SelectTag from "../components/SelectTag";
import { ContactPhoneRounded, MailRounded, PersonRounded, PhoneEnabledRounded, PhoneRounded } from "@mui/icons-material";
import styles from "../styles";
import SaveList from "../components/SaveList";

const Page3 = () => {
    const state = useGlobalContext();
    return (
        <>
            <div className="form_3">
                <div className="container">
                    <form autoComplete="false">
                        <div className="row">
                            <div className="col col-sm-6">
                                <LabelTag name="Loaded On" />
                                <SelectTag
                                    value={state.loaded_on}
                                    name="loaded_on"
                                    options={options}
                                />
                            </div>
                            <div className="col col-sm-6">
                                <LabelTag name="Description" />
                                <SearchBar
                                    value={state.description}
                                    name="description"
                                    options={options}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <LabelTag name="Quantity" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <InputTag value={state.quantity_amount} name="quantity_amount" type="number" />
                                    </div>
                                    <div className="col-sm-6">
                                        <SelectTag
                                            value={state.quamtity_options}
                                            name="quamtity_options"
                                            options={options}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <LabelTag name="Weight" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <InputTag value={state.weight_amount} name="weight_amount" type="number" />
                                    </div>
                                    <div className="col-sm-6">
                                        <SelectTag
                                            value={state.weight_options}
                                            name="weight_options"
                                            options={options}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LabelTag name="Marks and Numbers" />
                        <InputTag value={state.marks_and_numbers} name="marks_and_numbers" type="number" />
                        <LabelTag name="Hazmat Code" />
                        <SearchBar
                            value={state.hazmat_code}
                            name="hazmat_code"
                            options={options}
                        />
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <LabelTag name="Emergency Contact Name" />
                                <InputTag icon={<PersonRounded sx={styles.icons} />} value={state.emergency_contact_name} name="emergency_contact_name" type="text" />
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <LabelTag name="Contact Number" />
                                <InputTag icon={<PhoneRounded />} value={state.contact_no} name="contact_no" type="number" />
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <LabelTag name="Contact E-mail" />
                                <InputTag icon={<MailRounded />} value={state.contact_email} name="contact_email" type="email" />
                            </div>
                        </div>
                        <SaveList />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page3;