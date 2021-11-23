import * as React from "react";
import Grid from "@mui/material/Grid";

export default function FeatureImage(props) {
  const { feature } = props;
  return (
    <Grid
      item
      xs={12}
      sm={5}
      sx={{
        backgroundImage: `${feature.image}`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
