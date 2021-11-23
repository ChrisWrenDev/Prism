import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography align="center" variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Prism
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer(props) {
  let footerBoxConfig;

  if (props.sticky) {
    footerBoxConfig = {
      py: 3,
      px: 2,
      mt: "auto",
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    };
  } else {
    footerBoxConfig = { bgcolor: "background.paper", py: 6 };
  }

  return (
    <Box component="footer" sx={footerBoxConfig}>
      <Container maxWidth="sm">
        <Typography align="center" variant="body1">
          Logo Goes Here
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
