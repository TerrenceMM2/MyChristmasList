import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const AddedColumn = ({ addedItems, setAddedItems }) => {
  const [addedItemsFiltered, setAddedItemsFiltered] = useState(addedItems);

  const handleFilterAddedItems = (event) => {
    const value = event.target.value;
    if (value === "") return setAddedItemsFiltered(addedItems);
    const filteredItems = addedItems.filter((item) =>
      item.itemName.toLowerCase().includes(value.toLowerCase())
    );
    setAddedItemsFiltered(filteredItems);
  };

  return (
    <>
      <Typography align="center" variant="h1">
        Added
      </Typography>
      <Box>
        <TextField
          margin="normal"
          label="Filter"
          variant="standard"
          onChange={(event) => handleFilterAddedItems(event)}
        />
        {addedItemsFiltered.map((item) => (
          <>
            <Typography key={`${item.itemName}-added`} variant="body1">
              {item.icon} {item.itemName}
            </Typography>
          </>
        ))}
      </Box>
    </>
  );
};

AddedColumn.propTypes = {
  addedItems: PropTypes.array,
  setAddedItems: PropTypes.func,
};

export default AddedColumn;
