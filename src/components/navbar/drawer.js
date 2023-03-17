import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-scroll";
import { ListItemIcon, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../../assets/pdf/resume.pdf";

const NavMenuList = ({ toggleDrawer, navMenuItem }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        <nav id="nav-menu">
          {navMenuItem.map((item) =>
            item?.id === "resume" ? (
              <a
                href={resume}
                download="Amarjeet-Kumar-Resume"
                target="blank"
                className={`nav-link ${item.id}`}
                key={item.id}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="inherit" color="primary">
                          {item.title}
                        </Typography>
                      }
                    />
                    <ListItemIcon>
                      <DownloadIcon color="primary" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </a>
            ) : (
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
            )
          )}
        </nav>
      </List>
    </Box>
  );
};

export default NavMenuList;
