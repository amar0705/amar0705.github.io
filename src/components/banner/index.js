import { Box, Button, Grid, Typography } from "@mui/material";
import wave from "../../assets/png/hello-wave.png";
import portfolio from "../../assets/gif/portfolio.gif";
import email from "../../assets/png/email.png";
import linkedin from "../../assets/png/linkedin.png";
import github from "../../assets/png/github.png";
import {
  boxStyling,
  description,
  descriptionTextStyling,
  imgStyle,
  profileIcons,
  profileIconsSize,
} from "./bannerCss";

const Banner = () => {
  return (
    <>
      <Box mt={4} sx={{ display: "flex", flexGrow: 1, flexShrink: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={description}>
              <Box sx={descriptionTextStyling}>
                <Typography variant="h2" sx={{ fontWeight: 700 }} aliign="left">
                  Hello
                </Typography>
                <img src={wave} alt="wave" style={imgStyle} />
                <Typography variant="h2" sx={{ fontWeight: 800 }}>
                  .
                </Typography>
              </Box>
              <Typography variant="h5" color="typoText.secondary">
                I'm{" "}
                <Typography variant="h5" component="span" color="primary" sx={{ fontWeight: 700 }}>
                  Amarjeet
                </Typography>
                . Aspiring Full Stack Web Developer at Masai School, Life Long Learner.
              </Typography>
              <Box sx={profileIcons}>
                <img src={linkedin} alt="linkedin" style={profileIconsSize} />
                <img src={github} alt="linkedin" style={profileIconsSize} />
                <img src={email} alt="linkedin" style={profileIconsSize} />
              </Box>
              <Box sx={profileIcons}>
                {" "}
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
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={boxStyling}>
              <img src={portfolio} alt="portfolio" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;
