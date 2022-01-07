import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/prisim__logo--light.svg";
import MainContainer from "../components/MainContainer";
import SectionArea from "../components/SectionArea";

const Account = () => {
  return (
    <MainContainer>
      <SectionArea>
        <Link to="/">
          <PrismLogo src={Logo} />
        </Link>
        <Heading>Create Your Account</Heading>
        <Input type="text" placeholder="email" required />
        <Input type="password" placeholder="password" required />
        <SignUpBtn to="/browse">Continue</SignUpBtn>
        <SignInText>
          Already have an account? <LoginLink to="/login">Sign In</LoginLink>
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
  font-size: 3rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  border: solid 1px #829bb0;
  border-radius: 4px;
  color: #829bb0;
  height: 5rem;
  width: 35rem;
  padding: 1.3rem 1.5rem;
  margin-bottom: 1.6rem;

  :focus {
    outline: none;
    border: solid 2px #0d82ec;
  }
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
  max-width: 100%;
  width: 100%;

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

export default Account;
