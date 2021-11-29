import React, { useState, useEffect, useCallback } from "react";
import Container from "@mui/material/Container";
import HeaderMenu from "../components/HeaderMenu";
import WatchHero from "../components/WatchHero";
import WatchPlayer from "../components/WatchPlayer";
import ContentRow from "../components/ContentRow";
import Footer from "../components/Footer";
import useFetchMovies from "../hooks/useFetchMovies";
import { useSelector } from "react-redux";

export default function Browse() {
  const [watchMovie, setWatchMovie] = useState(false);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [featuredMovieLoaded, setFeaturedMovieLoaded] = useState(false);

  const watchMovieHandler = useCallback(function () {
    setWatchMovie((watchStatus) => !watchStatus);
  }, []);

  const userOptions = useSelector((state) => state.user.options);
  // const userGenres = useSelector((state) => state.user.genres);

  const { tmdbRequest } = useFetchMovies();

  useEffect(() => {
    const featuredMovie = (movies) => {
      if (featuredMovieLoaded) return;
      const randomIndex = Math.floor(Math.random() * movies.results.length - 1);
      const randomMovie = movies.results[randomIndex];
      setFeaturedMovie(randomMovie);
    };

    tmdbRequest("Trending", featuredMovie);

    setFeaturedMovieLoaded(true);
  }, [tmdbRequest, featuredMovieLoaded]);

  return (
    <React.Fragment>
      <HeaderMenu />
      <Container maxWidth="lg">
        <main>
          {!watchMovie && featuredMovie !== null && (
            <WatchHero
              watchMovie={watchMovieHandler}
              movieId={featuredMovie.id}
            />
          )}
          {watchMovie && <WatchPlayer movieId={featuredMovie.id} />}

          {/* {userOptions.watchList && <ContentRow title={"Watch List"} />} */}
          {userOptions.trending && <ContentRow title={"Trending"} />}
          {userOptions.topRated && <ContentRow title={"Top Rated"} />}
          {/* {userOptions.genres &&
            userGenres.map((genre) => {
              return <ContentRow title={genre.name} id={genre.id} />;
            })} */}
          {/* {userOptions.watched && <ContentRow title={"Watched"} />} */}
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
