import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import itemData from "data/itemData";

const Layout = (props) => {
  const [items, setItems] = useState(itemData);
  const [addedItems, setAddedItems] = useState([]);
  const [availableItems, setAvailableItems] = useState(items);

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography align="center" variant="h1">
              Not Added
            </Typography>
            <Box>
              {availableItems.map((item) => (
                <>
                  <Typography variant="body1">
                    {item.icon} {item.itemName}
                  </Typography>
                </>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography align="center" variant="h1">
              Added
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
