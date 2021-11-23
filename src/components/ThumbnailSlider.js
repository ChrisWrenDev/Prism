import React from "react";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function ThumbnailSlider(props) {
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
          <Card
            key={card}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              mx: "1rem",
            }}
            elevation={1}
          >
            <CardMedia
              component="img"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>Genre / Runtime</Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  );
}
