import * as React from "react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
//import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
//import NotificationsIcon from "@mui/icons-material/Notifications";
import { menuItems, socialItems, generalItems } from "./MenuItems";

export default function HeaderMenu() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <AppBar position="relative" color="default" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Prism Logo
          </Typography>
          <Avatar
            alt="profile"
            src="https://source.unsplash.com/random"
            sx={{ width: 56, height: 56 }}
          />
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer}>
        <Divider />
        <List>{menuItems}</List>
        <Divider />
        <List>{socialItems}</List>
        <Divider />
        <List>{generalItems}</List>
      </Drawer>
    </React.Fragment>
  );
}
