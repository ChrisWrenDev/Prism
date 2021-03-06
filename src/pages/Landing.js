import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/prisim__logo--light.svg";
import MainContainer from "../components/MainContainer";
import SectionArea from "../components/SectionArea";

const Landing = () => {
  return (
    <MainContainer>
      <SectionArea>
        <PrismLogo src={Logo} />
        <Heading>Watch Movies Together</Heading>
        <Description>
          Join over 10 million people and link up with friends to host long
          distance movie nights today!
        </Description>

        <SignUpBtn to="/account">Get Started</SignUpBtn>
        <SignInText>
          Already have an account? <LoginLink to="/login">Log In</LoginLink>
        </SignInText>
      </SectionArea>
    </MainContainer>
  );
};

const PrismLogo = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 4.5rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  text-align: center;
  color: #829bb0;
  margin-top: 0;
  margin-bottom: 3rem;
`;

const SignUpBtn = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  color: #f9faff;
  background-color: #0d82ec;
  border: solid 2px #0d82ec;
  border-radius: 4px;
  padding: 1.65rem 2.4rem;
  max-width: 38rem;

  :hover {
    background-color: transparent;
    color: #0d82ec;
    cursor: pointer;
  }
`;

const SignInText = styled.p`
  font-size: 1.4rem;
  text-align: center;
  color: #829bb0;
`;

const LoginLink = styled(Link)`
  font-weight: 700;
  color: #0d82ec;
  text-decoration: none;

  :hover {
    color: #829bb0;
  }
`;

export default Landing;
