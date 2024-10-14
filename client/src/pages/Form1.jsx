import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import { ListItem, ListItemIcon, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { Box } from "@mui/material";
import { InputLabel } from "@mui/material";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import ShipmentsDocumentation from "../components/ShipmentsDocumentation";
import FormLabelText from "../components/FormLabelText";
import SearchInput from "../components/SearchInput";

const Form1 = ({ data, handleChange }) => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return(
        <>
        <div className="form_details">
        <div className="container">
          <form action="">
            <FormLabelText label_helper_text="" label_text="trip details" />

            <FormControl sx={{ width: "28%", marginRight: "2%" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data}
                onChange={handleChange}
              >
                <MenuItem value={"ACBD"}>ACBD</MenuItem>
                <MenuItem value={"OPTION 2"}>OPTION 2</MenuItem>
                <MenuItem value={"OPTION 3"}>OPTION 3</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ width: "70%" }}
              id="contact phone number"
              type="number"
              autoComplete="none"
              placeholder="Enter Trip Number"
            />
            
            <FormLabelText label_helper_text="" label_text="u.s. port of arrival" />
           <SearchInput placeholder_name="Search..." input_helper_text="" />
            
            <FormLabelText label_helper_text="" label_text="estimated arrival date and time" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'MobileTimePicker']}>
                <DatePicker sx={{ width: "50%" }} />
                <MobileTimePicker sx={{ width: "50%" }} />
              </DemoContainer>
            </LocalizationProvider>

            <FormLabelText label_helper_text="(optional)" label_text="truck" />
            <SearchInput placeholder_name="Unit or Plate Number" input_helper_text="Required for manifest but can be added later" />
            
            <FormLabelText label_helper_text="(optional)" label_text="trailer" />
            <SearchInput placeholder_name="Unit or Plate Number" input_helper_text="Required for manifest but can be added later" />
            
            <FormLabelText label_helper_text="(optional)" label_text="driver" />
            <SearchInput placeholder_name="Driver Name" input_helper_text="Required for manifest but can be added later" />
            
            
            <FormLabelText label_helper_text="(optional)" label_text="Upload Shipments (JSON)" />
            <FormLabelText label_helper_text="(optional)" label_text="Upload Documentation" />
            

            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              
            >
              
             
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="none" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="none" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </form>

        </div>
      </div>
        </>
    );
}

export default Form1;