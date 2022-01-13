import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import SocialSidebar from "../components/SocialSidebar";
import MainContent from "../components/MainContent";

const Browse = () => {
  return (
    <Body>
      <Navigation />
      <MainContent />
      <SocialSidebar />
    </Body>
  );
};

const Body = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 3fr 11fr 1fr;
`;

export default Browse;
