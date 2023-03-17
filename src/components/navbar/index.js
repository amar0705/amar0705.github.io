import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import NavMenuList from "./drawer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const classes = {
  fontWeight: 1000,
  flexGrow: 1,
  fontFamily: "Fira Code",
  fontSize: "30px !important",
  lineHeight: 2,
};

const mainBox = { display: "flex", flexDirection: "column" };

const navButton = {
  padding: { lg: "10px 30px", md: "10px 17px" },
  fontWeight: 700,
  fontSize: 18,
};

export default function ButtonAppBar(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navItem = [
    { id: "home", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
    { id: "resume", title: "Resume" },
  ];
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <Box sx={mainBox}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            color="navbar"
            sx={{
              boxShadow: "none",
              opacity: 0.9,
              padding: 2,
            }}
          >
            <Toolbar>
              <Typography variant="h5" component="div" sx={classes}>
                {`< Amarjeet />`}
              </Typography>
              {!matches ? (
                <Box>
                  <nav id="nav-menu">
                    {navItem.map((item) => (
                      <Link
                        activeClass="active"
                        smooth
                        spy
                        to={item.id}
                        className={`nav-link ${item.id}`}
                        key={item.id}
                      >
                        <Button color="inherit" sx={navButton}>
                          {item.title}
                        </Button>
                      </Link>
                    ))}
                  </nav>
                </Box>
              ) : (
                <Box>
                  <IconButton color="inherit" component="label" onClick={toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
                    <NavMenuList toggleDrawer={toggleDrawer} navMenuItem={navItem} />
                  </Drawer>
                </Box>
              )}
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ width: "85%", margin: "auto" }}>{props.children}</Box>
      </Box>
    </>
  );
}
