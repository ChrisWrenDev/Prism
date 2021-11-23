import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GenreList from "./GenreList";
import Options from "./Options";

export default function Customise() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 2,
            my: 3,
            display: "flex",
          }}
          elevation={1}
        >
          <Options />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 2,
            my: 3,
            display: "flex",
          }}
          elevation={1}
        >
          <GenreList />
        </Paper>
      </Grid>
    </Grid>
  );
}
