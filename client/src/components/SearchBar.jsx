import React from "react";
import { Autocomplete, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Search, UnfoldMoreRounded } from "@mui/icons-material";
import styles from "../styles";
import { useGlobalContext } from "../Context";

const SearchBar = ({ options, name, value }) => {
  const { autocomplete_onchange } = useGlobalContext();

  return (
    <>
      <Autocomplete
        sx={styles.search_bar}
        popupIcon={<UnfoldMoreRounded />}
        disableClearable={!value || "" || null ? true : false}
        disablePortal
        options={options}
        value={value}
        onChange={(event, new_value) => autocomplete_onchange(new_value, name)}
        renderInput={
          (params) =>
            <TextField
              {...params}
              sx={styles.search_bar.textfield}
              variant="filled"
              hiddenLabel
            //  placeholder="Search..."
              size="small"
              color="secondary"
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: <InputAdornment position="start"><Search /></InputAdornment>
                }
              }}
            />
        }
      />
    </>
  );
}

export default SearchBar;