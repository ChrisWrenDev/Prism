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
          <MenuItem>
            <MenuLink to="/">
              <CompassIcon />
              Browse
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/">
              <HeartIcon />
              Watchlist
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/">
              <CalendarIcon />
              Coming soon
            </MenuLink>
          </MenuItem>
        </MenuGroup>

        <MenuGroup>
          <MenuHeading>Social</MenuHeading>
          <MenuItem>
            <MenuLink to="/">
              <FriendIcon />
              Friends
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/">
              <PartiesIcon />
              Parties
            </MenuLink>
          </MenuItem>
        </MenuGroup>

        <MenuGroup>
          <MenuHeading>General</MenuHeading>
          <MenuItem>
            <MenuLink to="/">
              <SettingsIcon />
              Settings
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/">
              <LogoutIcon />
              Log out
            </MenuLink>
          </MenuItem>
        </MenuGroup>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  height: 100%;
  width: 19%;
  background-color: #f9faff;
  display: flex;
  flex-direction: column;
  border-right: solid 2px #829bb0;
  padding-top: 3rem;
  padding-left: 3rem;
`;

const PrismLogo = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`;

const Nav = styled.nav``;

const MenuGroup = styled.div`
  margin-bottom: 6rem;
`;

const MenuHeading = styled.p`
  font-size: 1.6rem;
  color: #829bb0;
`;

const MenuItem = styled.div`
  font-size: 2rem;
`;

const MenuLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #829bb0;
`;

const CompassIcon = styled(RiCompassFill)``;

const HeartIcon = styled(RiHeart3Line)``;

const CalendarIcon = styled(RiCalendarEventLine)``;

const FriendIcon = styled(RiUser3Line)``;

const PartiesIcon = styled(RiTeamLine)``;

const SettingsIcon = styled(RiSettings3Line)``;

const LogoutIcon = styled(RiLoginBoxLine)``;

export default Navigation;
