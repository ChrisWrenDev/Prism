import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

const useFetchMovies = function () {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [error, setError] = useState(null);

  const mediaType = useSelector((state) => state.user.mediaType);

  const tmdbRequest = useCallback(
    async (requestType, applyDataFn, id) => {
      setLoadingStatus(true);

      const API_KEY = "55e23723976b36e1a1a6b497118258f9";
      const baseURL = `https://api.themoviedb.org/3/`;
      let urlPath = "";

      switch (requestType) {
        case "Trending":
          urlPath = `trending/${mediaType}/week?api_key=${API_KEY}&language=en-US`;
          break;
        case "Top Rated":
          urlPath = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=2`;
          break;
        case "Genre":
          urlPath = `discover/${mediaType}?api_key=${API_KEY}&with_genres=${id}`;
          break;
        case "Genre List":
          urlPath = `genre/${mediaType}/list?api_key=${API_KEY}&language=en-US`;
          break;
        case "Reccomendations":
          urlPath = `${mediaType}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
          break;
        case "Details":
          urlPath = `${mediaType}/${id}?api_key=${API_KEY}&language=en-US`;
          break;
        case "Videos":
          urlPath = `${mediaType}/${id}/videos?api_key=${API_KEY}&language=en-US`;
          break;
        default:
          break;
      }

      try {
        const response = await fetch(baseURL + urlPath);
        if (!response.ok)
          throw new Error(`TMDB Request Failed: ${response.status}`);
        const data = await response.json();
        applyDataFn(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }

      setLoadingStatus(false);
    },
    [mediaType]
  );

  return { loadingStatus, error, tmdbRequest };
};

export default useFetchMovies;
