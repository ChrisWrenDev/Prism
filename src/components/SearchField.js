import React from "react";
import styled from "styled-components";
import { RiSearch2Line, RiMicLine } from "react-icons/ri";

function SearchField() {
  return (
    <SearchBox type="text" placeholder="Search...">
      <SearchIcon size={30} />
      <SearchInput placeholder="Search..." />
      <VoiceIcon size={30} />
    </SearchBox>
  );
}

const SearchBox = styled.div`
  height: 5.5rem;
  width: 40rem;
  border: solid 1.5px #829bb0;
  border-radius: 2.5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  font-size: 1.6rem;
  color: #829bb0;
  width: 100%;
  border: none;
  background: transparent;
  margin-left: 1rem;

  &:focus-visible {
    outline: none;
  }
`;

const SearchIcon = styled(RiSearch2Line)`
  fill: #829bb0;
`;

const VoiceIcon = styled(RiMicLine)`
  fill: #829bb0;
`;

export default SearchField;
