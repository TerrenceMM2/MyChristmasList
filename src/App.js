import Layout from "layouts/Layout";

import { ThemeProvider } from "@mui/material";
import customTheme from "styles/customTheme";

import ListContainer from "components/ListContainer";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Layout>
        <ListContainer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
