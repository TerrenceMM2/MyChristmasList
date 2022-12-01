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
  const [items, setItems] = useState(itemData);
  const [addedItems, setAddedItems] = useState([]);
  const [availableItems, setAvailableItems] = useState(items);

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <AvailableColumn
          availableItems={availableItems}
          setAvailableItems={setAvailableItems}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <AddedColumn
          addedItems={addedItems}
          setAvailableItems={setAvailableItems}
        />
      </Grid>
    </Grid>
  );
};

ListContainer.propTypes = {};

export default ListContainer;
