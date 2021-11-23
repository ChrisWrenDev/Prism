import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

export const menuItems = (
  <div>
    <ListSubheader>Menu</ListSubheader>

    <ListItem button>
      <ListItemIcon>
        <ExploreOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Browse" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <FavoriteBorderOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Watchlist" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <CalendarTodayOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Coming Soon" />
    </ListItem>
  </div>
);

export const socialItems = (
  <div>
    <ListSubheader>Social</ListSubheader>

    <ListItem button>
      <ListItemIcon>
        <PersonOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Friends" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <GroupsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Parties" />
    </ListItem>
  </div>
);

export const generalItems = (
  <div>
    <ListSubheader>General</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);
