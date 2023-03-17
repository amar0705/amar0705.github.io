import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-scroll";

const NavMenuList = ({ toggleDrawer, navMenuItem }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        <nav id="nav-menu">
          {navMenuItem.map((item) => (
            <Link
              activeClass="active"
              smooth
              spy
              to={item.id}
              className={`nav-link ${item.id}`}
              key={item.id}
              onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
            >
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </nav>
      </List>
    </Box>
  );
};

export default NavMenuList;
