import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThumbnailSlider from "./ThumbnailSlider";

export default function ContentRow(props) {
  return (
    <Grid container sx={{ mt: "2rem" }}>
      <Grid item xs={10}>
        <Typography gutterBottom variant="h3" component="h2">
          {props.title}
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
        <ThumbnailSlider thumbnails={props.thumbnails} />
      </Grid>
    </Grid>
  );
}
