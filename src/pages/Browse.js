import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const Browse = () => {
  return (
    <Main>
      <Navigation />
    </Main>
  );
};

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
`;

export default Browse;
