import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function Options() {
  const [state, setState] = React.useState({
    popular: true,
    movies: true,
    tvShow: false,
    genres: true,
    watched: true,
    watchList: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Customise</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.popular}
              onChange={handleChange}
              name="popular"
            />
          }
          label="Popular"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.movies}
              onChange={handleChange}
              name="movies"
            />
          }
          label="All Movies"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.tvShows}
              onChange={handleChange}
              name="tvShows"
            />
          }
          label="All TV Shows"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.genres}
              onChange={handleChange}
              name="genres"
            />
          }
          label="Genres"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.watched}
              onChange={handleChange}
              name="watched"
            />
          }
          label="Watch Again"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.watch}
              onChange={handleChange}
              name="watchList"
            />
          }
          label="Watch List"
        />
      </FormGroup>
    </FormControl>
  );
}
