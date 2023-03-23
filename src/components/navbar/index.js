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
import resume from "../../assets/pdf/resume.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import email from "../../assets/png/email.png";
import linkedin from "../../assets/png/linkedin.png";
import github from "../../assets/png/github.png";
import { profileIconsSizeContact } from "../banner/bannerCss";
import CopyToClipboard from "react-copy-to-clipboard";

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

const sectionPadding = { paddingTop: "6%" };

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
  const profileLinks = [
    {
      name: "linkedin",
      src: linkedin,
      link: "https://www.linkedin.com/in/amarjeet-kumar-423ba524a/",
    },
    {
      name: "github",
      src: github,
      link: "https://github.com/amar0705",
    },
    {
      name: "email",
      src: email,
      link: "amar@gmail.com",
    },
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
                    {navItem.map((item) =>
                      item.id === "resume" ? (
                        <a
                          href={resume}
                          download="Amarjeet-Kumar-Resume"
                          target="blank"
                          className={`nav-link ${item.id}`}
                          key={item.id}
                          id="resume-button-1"
                        >
                          <Button color="primary" sx={navButton} endIcon={<DownloadIcon />}>
                            {item.title}
                          </Button>
                        </a>
                      ) : (
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
                      )
                    )}
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
        <section id="contact" className="contact section" style={sectionPadding}>
          <Box sx={{ bgcolor: "#f8f8f8" }} mt={5}>
            <Box
              sx={{
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                justifyContent: "space-between",
              }}
              pt={2}
              pb={2}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6">
                  <b>Contact Me:</b>
                </Typography>
                <Typography variant="h6">
                  <b>Amarjeet Kumar</b>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <span id="contact-phone">+91 5678905678</span>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <span id="contact-email"> amar@gmail.com</span>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                {profileLinks.map((item) =>
                  item.name === "email" || item.name === "phone" ? (
                    <div key={item.name}>
                      <CopyToClipboard text={item.link} onCopy={() => window.alert("Copied!")}>
                        <img
                          src={item.src}
                          alt={item.name}
                          style={profileIconsSizeContact}
                          id={`contact-${item.name}`}
                        />
                      </CopyToClipboard>
                    </div>
                  ) : (
                    <a href={item.link} target="blank" id={`contact-${item.name}`} key={item.name}>
                      <img src={item.src} alt={item.name} style={profileIconsSizeContact} />
                    </a>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
    </>
  );
}
