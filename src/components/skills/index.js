import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import wave from "../../assets/gif/wave.gif";
import skills from "../../assets/skills/skills.png";
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
} from "../banner/bannerCss";

const Skills = () => {
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
      <Box mt={10} sx={{ display: "flex", flexGrow: 1, flexShrink: 0, flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }} mb={10}>
          <Typography variant="h2">My Skills</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={description}>
              <Typography
                variant="h5"
                color="typoText.secondary"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 2,
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                >
                  <ListItem>
                    <Typography variant="h5">
                      Demonstrated proficiency in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b> to
                      create visually appealing and user-friendly interfaces.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">
                      Proficient in <b>Node.js</b> and <b>Express.js</b> to create scalable and
                      robust server-side applications.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">
                      Experience working with NoSQL databases such as <b>MongoDB</b> to design and
                      implement data models for web applications.
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={boxStyling}>
              <img src={skills} alt="portfolio" style={{ width: "75%" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Skills;
