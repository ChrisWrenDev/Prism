import * as React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

export default function Unlock() {
  return (
    <Paper
      sx={{
        p: 2,
        my: 3,
        display: "flex",
      }}
      elevation={1}
    >
      <Container>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Keep watching. Sign up today.
        </Typography>
        <Typography
          variant="h7"
          align="center"
          color="text.secondary"
          paragraph
        >
          You've completed your member preview for this month, sign up to get
          unlimited movies and tv shows.
        </Typography>

        <Button variant="contained">Subscribe</Button>
      </Container>
    </Paper>
  );
}
