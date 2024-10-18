import React from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import InputHelperText from "./InputHelperText";

const DateTimePicker = () => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="row gx-0" >
                    <div className="col-sm-6">
                    <DemoContainer components={['DatePicker']}>         
                        <DatePicker sx={{ width: "100%" }} />         
                </DemoContainer>
                <InputHelperText input_helper_text="Date format mm/dd/yyyy" />    
                    </div>
                    <div className="col-sm-6">
                    <DemoContainer components={['MobileTimePicker']}>             
                        <MobileTimePicker sx={{ width: "100%" }} />
                </DemoContainer>
                    </div>
                </div>
            </LocalizationProvider> 
        </>
    );
}

export default DateTimePicker;