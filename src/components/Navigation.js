import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/prisim__logo--light.svg";
import {
  RiCompassFill,
  RiHeart3Line,
  RiCalendarEventLine,
  RiUser3Line,
  RiTeamLine,
  RiSettings3Line,
  RiLoginBoxLine,
} from "react-icons/ri";

function Navigation() {
  return (
    <Header>
      <PrismLogo src={Logo} />

      <Nav>
        <MenuGroup>
          <MenuHeading>Menu</MenuHeading>

          <MenuLink to="/">
            <CompassIcon />
            <MenuItem>Browse</MenuItem>
          </MenuLink>

          <MenuLink to="/">
            <HeartIcon />
            <MenuItem>Watchlist</MenuItem>
          </MenuLink>

          <MenuLink to="/">
            <CalendarIcon />
            <MenuItem>Coming soon</MenuItem>
          </MenuLink>
        </MenuGroup>

        <MenuGroup>
          <MenuHeading>Social</MenuHeading>

          <MenuLink to="/">
            <FriendIcon />
            <MenuItem>Friends</MenuItem>
          </MenuLink>

          <MenuLink to="/">
            <PartiesIcon />
            <MenuItem>Parties</MenuItem>
          </MenuLink>
        </MenuGroup>

        <MenuGroup>
          <MenuHeading>General</MenuHeading>

          <MenuLink to="/">
            <SettingsIcon />
            <MenuItem>Settings</MenuItem>
          </MenuLink>

          <MenuLink to="/">
            <LogoutIcon />
            <MenuItem>Log out</MenuItem>
          </MenuLink>
        </MenuGroup>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  background-color: #f9faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid 1.5px #829bb0;
  padding-top: 3rem;
`;

const PrismLogo = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`;

const Nav = styled.nav`
  margin: 0 auto;
`;

const MenuGroup = styled.div`
  margin-bottom: 6rem;
`;

const MenuHeading = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #829bb0;
`;

const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  font-size: 3rem;
  text-decoration: none;
  color: #829bb0;

  &:hover {
    color: #0d82ec;
  }
`;

const MenuItem = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-left: 1.5rem;
`;

const CompassIcon = styled(RiCompassFill)``;

const HeartIcon = styled(RiHeart3Line)``;

const CalendarIcon = styled(RiCalendarEventLine)``;

const FriendIcon = styled(RiUser3Line)``;

const PartiesIcon = styled(RiTeamLine)``;

const SettingsIcon = styled(RiSettings3Line)``;

const LogoutIcon = styled(RiLoginBoxLine)``;

export default Navigation;
