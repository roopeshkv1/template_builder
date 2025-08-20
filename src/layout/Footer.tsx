import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
          {" | "}
          <Link color="inherit" href="/resume">
            About
          </Link>
          {" | "}
          <Link color="inherit" href="/contact">
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
