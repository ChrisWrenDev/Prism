import * as React from "react";
import Container from "@mui/material/Container";
import HeaderMenu from "../components/HeaderMenu";
import FeaturedContent from "../components/FeaturedContent";
import ContentRow from "../components/ContentRow";
import Footer from "../components/Footer";

const mainFeaturedContent = {
  title: "Title of a movie",
  genre: "Action",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
};

const thumbnails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Browse() {
  return (
    <React.Fragment>
      <HeaderMenu />
      <Container maxWidth="lg">
        <main>
          <FeaturedContent details={mainFeaturedContent} />
          <ContentRow thumbnails={thumbnails} />
          <ContentRow thumbnails={thumbnails} />
          <ContentRow thumbnails={thumbnails} />
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
