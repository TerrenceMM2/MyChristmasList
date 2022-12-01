import Container from "@mui/material/Container";

const Layout = ({ children }) => {
  return (
    <div>
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};

export default Layout;
