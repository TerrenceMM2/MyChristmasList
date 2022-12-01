import { useState } from "react";
import PropTypes from "prop-types";

// MUI Components
import Grid from "@mui/material/Grid";

// Custom Components
import AddedColumn from "./AddedColumn";
import AvailableColumn from "./AvailableColumn";

// Data
import itemData from "data/itemData";

const ListContainer = (props) => {
  const [addedItems, setAddedItems] = useState([]);
  const [availableItems, setAvailableItems] = useState(itemData);

  const handleAddItem = (item) => {
    const updatedAddedArr = [...addedItems];
    updatedAddedArr.push(item);
    setAddedItems(updatedAddedArr);

    const updatedAvailableArrCopy = [...availableItems];
    const updatedAvailableArr = updatedAvailableArrCopy.filter(
      (obj) => obj.id !== item.id
    );
    setAvailableItems(updatedAvailableArr);
  };

  const handleDeleteItem = (item) => {
    const updatedAvailableArrCopy = [...availableItems];
    const index = item.id - 1;
    updatedAvailableArrCopy.splice(index, 0, item);
    setAvailableItems(updatedAvailableArrCopy);

    const updatedAddedArrCopy = [...addedItems];
    const updatedAddedArr = updatedAddedArrCopy.filter(
      (obj) => obj.id !== item.id
    );
    setAddedItems(updatedAddedArr);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <AvailableColumn
          availableItems={availableItems}
          handleAddItem={handleAddItem}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <AddedColumn
          addedItems={addedItems}
          handleDeleteItem={handleDeleteItem}
        />
      </Grid>
    </Grid>
  );
};

ListContainer.propTypes = {};

export default ListContainer;
