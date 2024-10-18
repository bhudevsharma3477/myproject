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
                <DemoContainer components={['DatePicker', 'MobileTimePicker']}>
                    <DatePicker sx={{ width: "50%" }} />
                   
                    <MobileTimePicker sx={{ width: "50%" }} />
                </DemoContainer>
            </LocalizationProvider>
            <InputHelperText input_helper_text="Date format mm/dd/yyyy" />
        </>
    );
}

export default DateTimePicker;