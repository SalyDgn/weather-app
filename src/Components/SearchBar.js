import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@mui/material/Autocomplete";

function SearchBar() {
  const myOptions = [
    "Cap-Skirring",
    "Dakar/Yoff",
    "Diourbel",
    "Kaolack",
    "Kedougou",
    "Kolda",
    "Linguere",
    "Matam",
    "Podor",
    "Saint-Louis",
    "Tambacounda",
    "Ziguinchor",
  ];
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (myOptions) => myOptions,
  });

  return (
    <div>
      <Autocomplete
        filterOptions={filterOptions}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="small"
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={myOptions}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Choose a state" />
        )}
      />
    </div>
  );
}

export default SearchBar;
