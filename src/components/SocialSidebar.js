import React from "react";
import styled from "styled-components";
import { RiAddCircleFill } from "react-icons/ri";

function SocialSidebar() {
  return (
    <Sidebar>
      <AddFriendIcon size={"6rem"} />
      <FreindProfileIcon status="true" />
      <FreindProfileIcon status="true" />
      <FreindProfileIcon status="false" />
      <FreindProfileIcon status="false" />
      <FreindProfileIcon status="false" />
    </Sidebar>
  );
}

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddFriendIcon = styled(RiAddCircleFill)`
  fill: #0d82ec;
  border: none;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px 10px rgba(48, 68, 85, 0.15);
  }
`;

const FreindProfileIcon = styled.div`
  position: relative;
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50%;
  background-color: #829bb0;
  margin-top: 4rem;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px 10px rgba(48, 68, 85, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 0;
    width: 1.6rem;
    height: 1.6rem;
    border: solid 2px #f9faff;
    border-radius: 50%;
    background-color: ${(props) =>
      props.status === "true" ? "#92e88b" : "#e88b8b"};
  }
`;

export default SocialSidebar;
