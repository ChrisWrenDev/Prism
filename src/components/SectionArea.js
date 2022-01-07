import React from "react";
import styled from "styled-components";

function SectionArea(props) {
  return <Section>{props.children}</Section>;
}

const Section = styled.section`
  max-width: 65rem;
  background-color: #fafaff;
  border-radius: 8px;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SectionArea;
