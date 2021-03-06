import React from "react";
import styled from "styled-components";
import { RiAddLine } from "react-icons/ri";

function FeaturedVideo() {
  return (
    <FeaturedContainer>
      <VideoTitle>The Witcher</VideoTitle>
      <VideoDescription>Genre</VideoDescription>
      <VideoActions>
        <WatchBtn>Watch</WatchBtn>
        <WishlistBtn>
          <WishListIcon size={30} />
        </WishlistBtn>
      </VideoActions>
      <FreindsWatching>
        <FriendProfileIcon />
        <FriendProfileIcon />
        <FriendProfileIcon />
        <WatchingText>+5 freinds are watching</WatchingText>
      </FreindsWatching>
    </FeaturedContainer>
  );
}

const FeaturedContainer = styled.div`
  width: 100%;
  height: 54rem;
  background-color: #a3c3d8;
  border-radius: 4.5rem;
  padding: 6rem;
  display: grid;
  grid-template-rows: 6fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;

const VideoTitle = styled.h3`
  grid-area: 2 / 1 / 3 / 2;
  font-size: 5rem;
  color: #f9faff;
  margin: 0;
`;

const VideoDescription = styled.p`
  grid-area: 3 / 1 / 4 / 2;
  font-size: 1.8rem;
  color: #f9faff;
  margin: 0;
`;

const VideoActions = styled.div`
  grid-area: 4 / 1 / 5 / 2;
  display: flex;
  align-items: center;
`;

const FreindsWatching = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  justify-self: end;

  display: flex;
  justify-content: start;
  align-items: center;
`;

const FriendProfileIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  border: solid 1px #f9faff;
  background-color: #829bb0;

  &:first-of-type {
    transform: translateX(4rem);
    z-index: 2;
  }

  &:nth-of-type(2) {
    transform: translateX(2rem);
    z-index: 1;
  }

  &:last-of-type {
    margin-right: 1rem;
  }
`;

const WatchingText = styled.p`
  font-size: 1.4rem;
  color: #f9faff;
`;

const WatchBtn = styled.button`
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
  max-width: 50%;
  width: 50%;

  :hover {
    background-color: transparent;
    border-color: #f9faff;
    cursor: pointer;
  }
`;

const WishlistBtn = styled.button`
  background-color: #829bb0;
  border: solid 2px #829bb0;
  border-radius: 4px;
  height: 100%;
  max-width: 20%;
  width: 20%;
  margin-left: 1.5rem;

  :hover {
    background-color: transparent;
    border-color: #f9faff;
    cursor: pointer;
  }
`;

const WishListIcon = styled(RiAddLine)`
  fill: #f9faff;
`;

export default FeaturedVideo;
