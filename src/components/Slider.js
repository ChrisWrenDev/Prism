import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import VideoThumnail from "./VideoThumnail";

function Slider(props) {
  const sliderThumbnails = [
    { id: 1, title: "Film Name", genre: "Genre" },
    { id: 2, title: "Film Name", genre: "Genre" },
    { id: 3, title: "Film Name", genre: "Genre" },
    { id: 4, title: "Film Name", genre: "Genre" },
    { id: 5, title: "Film Name", genre: "Genre" },
    { id: 6, title: "Film Name", genre: "Genre" },
    { id: 7, title: "Film Name", genre: "Genre" },
    { id: 8, title: "Film Name", genre: "Genre" },
    { id: 9, title: "Film Name", genre: "Genre" },
    { id: 10, title: "Film Name", genre: "Genre" },
    { id: 11, title: "Film Name", genre: "Genre" },
    { id: 12, title: "Film Name", genre: "Genre" },
    { id: 13, title: "Film Name", genre: "Genre" },
  ];

  const [counter, setCounter] = useState(0);

  const sliderLeftHandler = () => {
    if (counter === 0) return;
    setCounter((prevCounter) => prevCounter - 1);
  };

  const sliderRightHandler = () => {
    if (counter === sliderThumbnails.length - 4) return;
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <Container>
      <SliderDetails>
        <SliderHeading>{props.title}</SliderHeading>
        <SliderControls>
          <SliderBtn onClick={sliderLeftHandler}>
            <ArrowLeft size={15} />
          </SliderBtn>
          <SliderBtn onClick={sliderRightHandler}>
            <ArrowRight size={15} />
          </SliderBtn>
        </SliderControls>
      </SliderDetails>
      <SliderContent>
        {sliderThumbnails.slice(counter, counter + 4).map((item) => (
          <VideoThumnail
            key={`t${item.id}`}
            id={item.id}
            title={item.title}
            genre={item.genre}
          />
        ))}
      </SliderContent>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 6rem;
`;

const SliderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 4rem;
`;

const SliderHeading = styled.h2`
  font-size: 2.6rem;
  margin: 0;
`;

const SliderControls = styled.div``;

const SliderBtn = styled.button`
  width: 4rem;
  background-color: #829bb0;
  border: solid 2px #829bb0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.2s;

  &:first-of-type {
    margin-right: 1rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const ArrowLeft = styled(RiArrowLeftSLine)`
  fill: #f9faff;
`;

const ArrowRight = styled(RiArrowRightSLine)`
  fill: #f9faff;
`;

const SliderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default Slider;
