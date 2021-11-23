import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import HeaderSignIn from "../components/HeaderSignIn";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const features = [
  {
    title: "Watch Everywhere",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "url(https://source.unsplash.com/collection/1)",
    layout: "left",
  },
  {
    title: "Tailor To Your Tastes",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "url(https://source.unsplash.com/collection/2)",
    layout: "right",
  },
  {
    title: "Level Up",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "url(https://source.unsplash.com/collection/3)",
    layout: "left",
  },
];

export default function Landing() {
  return (
    <React.Fragment>
      <HeaderSignIn />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Unlimited films, TV programmes and more.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Watch anywhere. Cancel at any time.
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        {/* ROW */}
        {features.map((feature) => (
          <Feature
            key={feature.title}
            feature={feature}
            layout={feature.layout}
          />
        ))}
      </main>
      <Footer />
    </React.Fragment>
  );
}
