import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// MUI Components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// MUI Icons
import RemoveIcon from "@mui/icons-material/Remove";

const AddedColumn = ({ addedItems, handleDeleteItem }) => {
  const [addedItemsFiltered, setAddedItemsFiltered] = useState([]);

  const handleFilterAddedItems = (event) => {
    const value = event.target.value;
    if (value === "") return setAddedItemsFiltered(addedItems);
    const filteredItems = addedItems.filter((item) =>
      item.itemName.toLowerCase().includes(value.toLowerCase())
    );
    setAddedItemsFiltered(filteredItems);
  };

  useEffect(() => {
    setAddedItemsFiltered(addedItems);
  }, [addedItems]);

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
              <IconButton
                color="error"
                aria-label={`remove-${item.itemName}`}
                onClick={() => handleDeleteItem(item)}>
                <RemoveIcon />
              </IconButton>
            </Typography>
          </>
        ))}
      </Box>
    </>
  );
};

AddedColumn.propTypes = {
  addedItems: PropTypes.array,
  handleDeleteItem: PropTypes.func,
};

export default AddedColumn;
