import * as React from "react";
import Grid from "@mui/material/Grid";
import FeatureImage from "./FeatureImage";
import FeatureDetails from "./FeatureDetails";

export default function Feature(props) {
  const { feature } = props;

  return (
    <Grid container sx={{ height: "50vh" }}>
      <FeatureImage feature={feature} />
      <FeatureDetails feature={feature} />
    </Grid>
  );
}
