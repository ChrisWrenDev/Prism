import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function WatchDetails() {
  return (
    <Paper
      sx={{
        p: 2,
        my: 3,
        display: "flex",
      }}
      elevation={1}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography
            component="h2"
            variant="h6"
            color="primary"
            align="center"
            gutterBottom
          >
            Minutes Watched
          </Typography>
          <Typography component="p" variant="h4" align="center">
            1,357
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }} align="center">
            +33.5%
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            component="h2"
            variant="h6"
            color="primary"
            align="center"
            gutterBottom
          >
            TV Shows Watched
          </Typography>
          <Typography component="p" variant="h4" align="center">
            94
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }} align="center">
            +33.5%
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            component="h2"
            variant="h6"
            color="primary"
            align="center"
            gutterBottom
          >
            Movies Watched
          </Typography>
          <Typography component="p" variant="h4" align="center">
            5
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }} align="center">
            +33.5%
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
