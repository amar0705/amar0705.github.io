import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

const classes = {
  fontWeight: 800,
  flexGrow: 1,
  fontFamily: "Courier New, monospace",
  fontSize: 28,
  lineHeight: 2,
};

const mainBox = { display: "flex", flexDirection: "column" };

const navButton = { padding: "10px 30px", fontWeight: 700, fontSize: 18 };

export default function ButtonAppBar(props) {
  const navItem = [
    { id: "home", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
    { id: "resume", title: "Resume" },
  ];
  return (
    <>
      <Box sx={mainBox}>
        <Box sx={{ flexGrow: 1 }} ml={10} mr={10}>
          <AppBar
            position="fixed"
            color="navbar"
            sx={{
              boxShadow: "none",
              opacity: 0.9,
            }}
          >
            <Toolbar>
              <Typography variant="h5" component="div" sx={classes}>
                {`< Amarjeet />`}
              </Typography>
              <nav title="Navbar" id="nav-menu">
                {navItem.map((item) => (
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to={item.id}
                    className={`nav-link ${item.id}`}
                  >
                    <Button color="inherit" sx={navButton}>
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </nav>
            </Toolbar>
          </AppBar>
        </Box>
        <Box ml={20} mr={20}>
          {props.children}
        </Box>
      </Box>
    </>
  );
}
