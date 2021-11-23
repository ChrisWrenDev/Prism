import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function FeatureDetails(props) {
  const { feature } = props;
  return (
    <Grid item xs={12} sm={7}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography align="left" component="h2" variant="h5">
          {feature.title}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          {feature.description}
        </Typography>
      </Box>
    </Grid>
  );
}
