import React from "react";
import styled, { keyframes } from "styled-components";
import { RiNotification2Line, RiMessage3Line } from "react-icons/ri";

function ProfileIcons() {
  return (
    <ProfileArea>
      <IconWrapper status="true">
        <NotificationIcon size={30} />
      </IconWrapper>
      <IconWrapper status="false">
        <MessageIcon size={30} />
      </IconWrapper>
      <ProfileIcon />
      <ProfileDetails>
        <ProfileName>First Name</ProfileName>
        <ProfileLevel>Level 13</ProfileLevel>
      </ProfileDetails>
    </ProfileArea>
  );
}

const Swing = keyframes`
 0% { transform: rotate(6deg); }
100% { transform: rotate(-6deg); }
`;

const ProfileArea = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 3rem;
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    width: 1.3rem;
    height: 1.3rem;
    border: solid 2px #f9faff;
    border-radius: 50%;
    background-color: ${(props) =>
      props.status === "true" ? "#92e88b" : "#e88b8b"};
  }
`;

const NotificationIcon = styled(RiNotification2Line)`
  fill: #829bb0;

  &:hover {
    fill: #0d82ec;
    animation: ${Swing} ease-in-out 1s infinite alternate;
  }
`;

const MessageIcon = styled(RiMessage3Line)`
  fill: #829bb0;

  &:hover {
    fill: #0d82ec;
    animation: ${Swing} ease-in-out 0.2s infinite alternate;
  }
`;

const ProfileIcon = styled.div`
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50%;
  background-color: #829bb0;
  margin-right: 2rem;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

const ProfileLevel = styled.p`
  font-size: 1.2rem;
  color: #829bb0;
  margin: 0;
`;

export default ProfileIcons;
