import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// MUI Components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// MUI Icons
import AddIcon from "@mui/icons-material/Add";

const AvailableColumn = ({ availableItems, handleAddItem }) => {
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

  useEffect(() => {
    setAvailableItemsFiltered(availableItems);
  }, [availableItems]);

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
          disabled={availableItemsFiltered.length === 0}
        />
        {availableItemsFiltered.length === 0 ? (
          <>
            <Typography sx={{ textAlign: "center " }} variant="h2">
              No items available.
            </Typography>
          </>
        ) : (
          <Box sx={{ maxHeight: 500, overflowY: "auto" }}>
            {availableItemsFiltered.map((item) => (
              <Typography key={`${item.itemName}-available`} variant="body1">
                {item.icon} {item.itemName}
                <IconButton
                  color="success"
                  aria-label={`remove-${item.itemName}`}
                  onClick={() => handleAddItem(item)}>
                  <AddIcon />
                </IconButton>
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

AvailableColumn.propTypes = {
  availableItems: PropTypes.array,
  handleAddItem: PropTypes.func,
};

export default AvailableColumn;
