import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThumbnailSlider from "./ThumbnailSlider";
import useFetchMovies from "../hooks/useFetchMovies";
import { useSelector } from "react-redux";

export default function ContentRow({ title, movieId }) {
  const [movies, setMovies] = useState([]);

  const userWatched = useSelector((state) => state.user.watched);
  const userWatchList = useSelector((state) => state.user.watchList);

  const { tmdbRequest } = useFetchMovies();

  useEffect(() => {
    const moviesRequestData = function (movies) {
      console.log("Movies List: ", movies);
      setMovies(movies.results);
    };

    switch (title) {
      case "Watch List":
        moviesRequestData(userWatchList);
        break;
      case "Watched":
        moviesRequestData(userWatched);
        break;
      case "Trending":
        tmdbRequest(title, moviesRequestData);
        break;
      case "Top Rated":
        tmdbRequest(title, moviesRequestData);
        break;
      case "Reccomendations":
        tmdbRequest(title, moviesRequestData, movieId);
        break;
      default:
        break;
    }
  }, [movieId, title, tmdbRequest, userWatchList, userWatched]);

  return (
    <Grid container sx={{ mt: "2rem" }}>
      <Grid item xs={10}>
        <Typography gutterBottom variant="h3" component="h2">
          {title ?? "Hello"}
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
        {/* https://react-slick.neostack.com/docs/example/previous-next-methods */}
        <Button variant="outlined" sx={{ mr: "1rem", px: "0.5rem" }}>
          <ArrowBackIosNewIcon />
        </Button>
        <Button variant="outlined">
          <ArrowForwardIosIcon />
        </Button>
      </Grid>
      <Grid item xs={12}>
        {<ThumbnailSlider thumbnails={movies} />}
      </Grid>
    </Grid>
  );
}
