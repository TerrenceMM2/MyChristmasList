import Layout from "layouts/Layout";

import { ThemeProvider } from "@mui/material";
import customTheme from "styles/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
