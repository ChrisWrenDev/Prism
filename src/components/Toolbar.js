import React from "react";
import styled from "styled-components";
import ProfileIcons from "./ProfileIcons";
import SearchField from "./SearchField";

function Toolbar() {
  return (
    <Bar>
      <SearchField />
      <ProfileIcons />
    </Bar>
  );
}

const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
`;

export default Toolbar;
