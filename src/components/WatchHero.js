import React, { Fragment, useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useFetchMovies from "../hooks/useFetchMovies";

const WatchHero = function ({ watchMovie, movieId }) {
  const [movieLoaded, setMovieLoaded] = useState(false);
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    description: "",
    genre: "",
    image: "",
  });

  const { tmdbRequest } = useFetchMovies();

  useEffect(() => {
    const transformMovieData = (movieData) => {
      if (movieLoaded) return;

      const featuredMovieDetails = {
        title:
          movieData.original_title || movieData.name || movieData.original_name,
        description: movieData.overview ?? "no description found",
        genre: "",
        image: movieData.backdrop_path,
      };

      setMovieDetails(featuredMovieDetails);
    };

    tmdbRequest("Details", transformMovieData, movieId);

    setMovieLoaded(true);
  }, [movieId, movieLoaded, tmdbRequest]);

  const truncateString = function (str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  };

  return (
    <Fragment>
      <Paper
        sx={{
          position: "relative",
          top: "1rem",
          height: "32rem",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieDetails.image}")`,
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
                {movieDetails.title}
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
                {movieDetails.genre}
              </Typography>
              <Typography variant="p" color="inherit" paragraph>
                {truncateString(movieDetails.description, 150)}
              </Typography>

              <Button
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={watchMovie}
              >
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
    </Fragment>
  );
};

export default WatchHero;
