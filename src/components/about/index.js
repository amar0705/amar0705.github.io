import { Box, Button, Grid, Typography } from "@mui/material";
import resume from "../../assets/pdf/resume.pdf";
import portfolio from "../../assets/png/DSC_0783 copy-photoaidcom-cropped.jpg";
import { boxStyling, description } from "../banner/bannerCss";

const About = () => {
  return (
    <>
      <Box mt={10} sx={{ display: "flex", flexGrow: 1, flexShrink: 0, flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }} mb={5}>
          <Typography variant="h2" align="center">
            About Me
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={boxStyling}>
              <img
                src={portfolio}
                alt="portfolio"
                className="home-img"
                style={{
                  width: "75%",
                  borderRadius: "50%",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={description}>
              <Typography
                variant="h5"
                color="typoText.secondary"
                sx={{ lineHeight: "1.5em", textAlign: { md: "left", xs: "center" } }}
                id="user-detail-intro"
              >
                I'm{" "}
                <Typography
                  variant="h5"
                  component="span"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                  id="user-detail-name"
                >
                  Amarjeet Kumar
                </Typography>
                , Analytical and detail-oriented aspiring Full Stack Developer. Capable of writing
                production-ready code using HTML, JavaScript, and CSS on the frontend, NodeJS,
                Express and MongoDB on the backend to build single page applications. Passionate
                about coding and strongly interested in working in a product-based company.
              </Typography>
              <a href={resume} id="resume-button-2" download="Amarjeet-Kumar-Resume" target="blank">
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
                    My Resume
                  </Typography>
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
