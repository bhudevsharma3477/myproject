import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateTimePicker = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "TimePicker"]}>
          <DemoItem>
            <DatePicker
              format='MM-DD-YYYY'
              slotProps={{
                textField: {
                  variant: "filled",
                  color: "secondary",
                  size: "small",
                  hiddenLabel: true,
                },
              }}
            />
          </DemoItem>

          <DemoItem>
            <MobileTimePicker
              slotProps={{
                textField: {
                  variant: "filled",
                  color: "secondary",
                  size: "small",
                  hiddenLabel: true,
                },
              }}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}

export default DateTimePicker;