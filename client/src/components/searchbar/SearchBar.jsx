import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import search_bar from "./search_bar_styles";

const SearchBar = ({ options }) => {

  return (
    <>
      <Autocomplete
        sx={search_bar}
        disablePortal
        options={options}
        renderInput={
          (params) =>
            <TextField
              {...params}
              sx={search_bar.textfield}
              variant="filled"
              label="Search..."
              size="small"
            />
        }
      />
    </>
  );
}

export default SearchBar;