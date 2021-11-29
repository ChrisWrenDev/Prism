import * as React from "react";
import Container from "@mui/material/Container";
import HeaderMenu from "../components/HeaderMenu";
import FeaturedContent from "../components/WatchHero";
import CastRow from "../components/CastRow";
import ContentRow from "../components/ContentRow";
import ContentDetails from "../components/ContentDetails";
import Footer from "../components/Footer";

const watchContent = {
  title: "Title of a movie",
  stars: 4,
  reviews: 2314,
  genre: `PG-13 · 2hr49min · Adventure, Drama, Sci-Fi · 2014`,
  cast: "Matthew McConaughey, Anne Hathaway, ",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
};

const thumbnails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function WatchScreen() {
  return (
    <React.Fragment>
      <HeaderMenu />
      <Container maxWidth="lg">
        <main>
          <FeaturedContent details={watchContent} />
          <ContentDetails />
          <CastRow title="Staring" thumbnails={thumbnails} />
          <ContentRow title="More Like This" thumbnails={thumbnails} />
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
