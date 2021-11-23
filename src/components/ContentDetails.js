import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function ContentDetails() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Toothbrush
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          PG-13 · 2hr49min · Adventure, Drama, Sci-Fi · 2014
        </Typography>
        <Box sx={{ my: 2 }}>
          <Stack direction="row" spacing={1}>
            <Chip label="Action" />
            <Chip label="Adventure" />
            <Chip label="Comedy" />
            <Chip label="Horror" />
          </Stack>
        </Box>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography variant="h6" color="inherit" paragraph>
          Director · Full Name
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography variant="h6" color="inherit" paragraph>
          Writers · Full Name · Full Name
        </Typography>
      </Box>
      <Divider variant="middle" />
    </Box>
  );
}
