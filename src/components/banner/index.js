import { Box, Button, Grid, Slide, Typography } from "@mui/material";
import wave from "../../assets/gif/wave.gif";
import portfolio from "../../assets/gif/portfolio.gif";
import email from "../../assets/png/email.png";
import linkedin from "../../assets/png/linkedin.png";
import github from "../../assets/png/github.png";
import phone from "../../assets/png/phone.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  boxStyling,
  description,
  descriptionTextStyling,
  imgStyle,
  profileIcons,
  profileIconsSize,
} from "./bannerCss";
import { Link } from "react-scroll";
import createNotification from "../../utils/alert";

const Banner = () => {
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
    {
      name: "phone",
      src: phone,
      link: "+91-8178726246",
    },
  ];
  return (
    <>
      <Box mt={10} sx={{ display: "flex", flexGrow: 1, flexShrink: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1000}>
              <Box sx={description}>
                <Box sx={descriptionTextStyling}>
                  <Typography variant="h2">Greetings</Typography>
                  <img src={wave} alt="wave" style={imgStyle} />
                  <Typography variant="h2">.</Typography>
                </Box>
                <Typography
                  variant="h5"
                  color="typoText.secondary"
                  sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                  I'm{" "}
                  <Typography
                    variant="h5"
                    component="span"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  >
                    Amarjeet
                  </Typography>
                  , aspiring Full Stack Developer with a passion for developing seamless,
                  user-friendly web applications.
                </Typography>
                <Box sx={profileIcons}>
                  {profileLinks.map((item) =>
                    item.name === "email" || item.name === "phone" ? (
                      <div key={item.name}>
                        <CopyToClipboard
                          text={item.link}
                          onCopy={() =>
                            createNotification({
                              type: "success",
                              title: "Success",
                              message: `${item.name} copied successfully!!`,
                            })
                          }
                        >
                          <img
                            src={item.src}
                            alt={item.name}
                            style={profileIconsSize}
                            id={`contact-${item.name}`}
                          />
                        </CopyToClipboard>
                      </div>
                    ) : (
                      <a
                        href={item.link}
                        target="blank"
                        id={`contact-${item.name}`}
                        key={item.name}
                      >
                        <img src={item.src} alt={item.name} style={profileIconsSize} />
                      </a>
                    )
                  )}
                </Box>
                <Box sx={profileIcons}>
                  {" "}
                  <Link activeClass="active" smooth spy to="contact">
                    <Button variant="contained">
                      <Typography
                        variant="body1"
                        color="#fff"
                        pl={5}
                        pr={5}
                        pt={1}
                        pb={1}
                        sx={{ fontWeight: 600 }}
                      >
                        Contact Me
                      </Typography>
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1000}>
              <Box sx={boxStyling}>
                <img src={portfolio} alt="portfolio" style={{ width: "75%" }} />
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;
