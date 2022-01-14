import React from "react";
import styled from "styled-components";
import FeaturedVideo from "./FeaturedVideo";
import Toolbar from "./Toolbar";
import Slider from "./Slider";

function MainContent() {
  return (
    <Main>
      <Toolbar />
      <FeaturedVideo />
      <Slider title="Movies" />
      <Slider title="TV Shows" />
    </Main>
  );
}

const Main = styled.main`
  background-color: #f9faff;
  padding: 0 6rem;
`;

export default MainContent;
