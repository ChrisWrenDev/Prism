import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

function VideoThumnail(props) {
  const [showDetails, setShowDetails] = useState(false);

  const thumbnailMouseEnter = () => {
    setShowDetails(true);
  };

  const thumbnailMouseLeaver = () => {
    setShowDetails(false);
  };

  return (
    <Thumbnail
      onMouseEnter={thumbnailMouseEnter}
      onMouseLeave={thumbnailMouseLeaver}
    >
      {showDetails && (
        <VideoDetails>
          <VideoTitle>{`${props.title} ${props.id}`}</VideoTitle>
          <VideoGenre>{props.genre}</VideoGenre>
        </VideoDetails>
      )}
    </Thumbnail>
  );
}

const SlideIn = keyframes`
0% {
  transform: translateY(10rem);
},
100% {
  transform: translateY(0);
}
`;

const Thumbnail = styled.div`
  height: 20rem;
  width: 24rem;
  border-radius: 3rem;

  background-color: #606060;
  color: #f9faff;
  font-size: 5rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const VideoDetails = styled.div`
  height: 50%;
  background-color: #fff;
  color: #a3c3d8;
  border-top: solid 2px #a3c3d8;
  padding: 1rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: 0.5s ease-in-out 0s 1 ${SlideIn};
`;

const VideoTitle = styled.h3`
  font-size: 2rem;
  margin: 0;
`;

const VideoGenre = styled.p`
  font-size: 1.4rem;
  margin: 0;
  color: #829bb0;
`;

export default VideoThumnail;
