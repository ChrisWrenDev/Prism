import React from "react";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function ProfileSlider(props) {
  const { thumbnails } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <Slider {...settings}>
      {thumbnails.map((card, i) => (
        <div index={i} key={i}>
          <Container>
            <Avatar
              alt="profile"
              src="https://source.unsplash.com/random"
              sx={{ width: "10rem", height: "10rem", mx: "auto", mb: "1rem" }}
            />
            <Typography align="center" gutterBottom variant="h5" component="h2">
              Full Name
            </Typography>
            <Typography align="center">Character</Typography>
          </Container>
        </div>
      ))}
    </Slider>
  );
}
