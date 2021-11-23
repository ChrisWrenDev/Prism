import React from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function FeaturedContent(props) {
  const { details } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        top: "1rem",
        height: "23rem",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${details.image})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {details.title}
            </Typography>
            <Rating
              name="text-feedback"
              value={3}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Typography variant="h6" color="inherit" paragraph>
              {details.genre}
            </Typography>
            <Typography variant="p" color="inherit" paragraph>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Typography>

            <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
              Watch
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2, ml: "1rem" }}
            >
              Add to Watchlist
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
