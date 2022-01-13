import React from "react";
import styled from "styled-components";
import FeaturedVideo from "./FeaturedVideo";
import Toolbar from "./Toolbar";

function MainContent() {
  return (
    <Main>
      <Toolbar />
      <FeaturedVideo />
    </Main>
  );
}

const Main = styled.main`
  background-color: #f9faff;
  padding: 0 6rem;
`;

export default MainContent;
