import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import LaptopIcon from "@mui/icons-material/Laptop";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export default function DeviceDetails() {
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
        <Grid item xs={12} md={3}>
          <Stack direction="row" spacing={2}>
            <PhoneAndroidIcon />
            <div>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Mobile
              </Typography>
              <Typography component="p" variant="h4" align="center">
                30%
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack direction="row" spacing={2}>
            <TabletMacIcon />
            <div>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Tablet
              </Typography>
              <Typography component="p" variant="h4" align="center">
                30%
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack direction="row" spacing={2}>
            <LaptopIcon />
            <div>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Computer
              </Typography>
              <Typography component="p" variant="h4" align="center">
                30%
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack direction="row" spacing={2}>
            <TvIcon />
            <div>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                TV
              </Typography>
              <Typography component="p" variant="h4" align="center">
                30%
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
