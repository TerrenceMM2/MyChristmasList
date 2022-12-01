import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const AvailableColumn = ({ availableItems, setAvailableItems }) => {
  const [availableItemsFiltered, setAvailableItemsFiltered] =
    useState(availableItems);

  const handleFilterAvailableItems = (event) => {
    const value = event.target.value;
    if (value === "") return setAvailableItemsFiltered(availableItems);
    const filteredItems = availableItems.filter((item) =>
      item.itemName.toLowerCase().includes(value.toLowerCase())
    );
    setAvailableItemsFiltered(filteredItems);
  };

  return (
    <>
      <Typography align="center" variant="h1">
        Available
      </Typography>
      <Box>
        <TextField
          margin="normal"
          label="Filter"
          variant="standard"
          onChange={(event) => handleFilterAvailableItems(event)}
        />
        {availableItemsFiltered.map((item) => (
          <>
            <Typography key={`${item.itemName}-available`} variant="body1">
              {item.icon} {item.itemName}
            </Typography>
          </>
        ))}
      </Box>
    </>
  );
};

AvailableColumn.propTypes = {
  availableItems: PropTypes.array,
  setAvailableItems: PropTypes.func,
};

export default AvailableColumn;
