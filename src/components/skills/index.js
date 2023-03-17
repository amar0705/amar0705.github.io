import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import skills from "../../assets/skills/skills.png";
import { boxStyling, description } from "../banner/bannerCss";

const Skills = () => {
  return (
    <div className="skills-card">
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
                      <span class="skills-card-name">
                        Demonstrated proficiency in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>{" "}
                        to create visually appealing and user-friendly interfaces.
                      </span>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">
                      <span class="skills-card-name">
                        Proficient in <b>Node.js</b> and <b>Express.js</b> to create scalable and
                        robust server-side applications.
                      </span>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">
                      <span class="skills-card-name">
                        Experience working with NoSQL databases such as <b>MongoDB</b> to design and
                        implement data models for web applications.
                      </span>
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="skills-card-img" style={{ height: "100%" }}>
              <Box sx={boxStyling}>
                <img src={skills} alt="portfolio" style={{ width: "75%" }} />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Skills;
