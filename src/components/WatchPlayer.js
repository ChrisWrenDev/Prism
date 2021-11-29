import React, { useState, useEffect } from "react";
import { CardMedia } from "@mui/material";
import useFetchMovies from "../hooks/useFetchMovies";

export default function WatchPlayer({ movieId }) {
  const [movieVideo, setMovieVideo] = useState({});
  const [videoRequested, setVideoRequested] = useState(false);

  const { tmdbRequest } = useFetchMovies();

  useEffect(() => {
    const transformVideoData = (videoDetails) => {
      console.log("Details: ", videoDetails);
      if (videoRequested) return;

      let movieVideoDetails = {
        videoId: videoDetails.results[0].key,
        site: videoDetails.results[0].site,
      };

      for (const video of videoDetails.results) {
        if (video.type === "Trailer") {
          movieVideoDetails = {
            videoId: video.key,
            site: video.site,
          };
        }
      }

      setMovieVideo(movieVideoDetails);
    };

    tmdbRequest("Videos", transformVideoData, movieId);

    setVideoRequested(true);
  }, [movieId, videoRequested, tmdbRequest]);

  if (movieVideo.site === "YouTube") {
    return (
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${movieVideo.videoId}?autoplay=1&controls=0`}
        sx={{ height: "32rem" }}
      />
    );
  } else {
    return (
      <CardMedia
        component="iframe"
        src={`https://player.vimeo.com/video/${movieVideo.videoId}`}
      />
    );
  }
}
