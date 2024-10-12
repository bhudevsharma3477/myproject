import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import { TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";


const Formdata = ({ age, handleChange }) => {
  return (
    <>
      <div className="form_details">
        <div className="container">
          <form action="">
            <label htmlFor="">trip number</label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={handleChange}
                value={age}
              >
                <MenuItem value={"ACBD"}>ACBD</MenuItem>
                <MenuItem value={"OPTION 2"}>OPTION 2</MenuItem>
                <MenuItem value={"OPTION 3"}>OPTION 3</MenuItem>
              </Select>
            </FormControl>
            <input type="number" />
            <label htmlFor="">u.s. port of arrival</label><br />
          </form>

          <TextField
            fullWidth
            id="standard-bare"
            variant="outlined"
            defaultValue=""
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />

        </div>
      </div>
    </>
  );
}

export default Formdata;