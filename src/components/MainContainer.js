import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/prism-background.jpg";

function MainContainer(props) {
  return <Main>{props.children}</Main>;
}

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
      to top,
      rgba(240, 242, 251, 1),
      rgba(240, 242, 251, 0.8)
    ),
    url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default MainContainer;
