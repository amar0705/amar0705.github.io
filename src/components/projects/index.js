import { Box, Grid, Typography } from "@mui/material";
import projects from "../../assets/gif/projects.gif";
import { boxStyling, description } from "../banner/bannerCss";
import ProjectsData from "./projectData";
import fitoryxImg from "../../assets/projects/fitoryx.jpg";
import html from "../../assets/skills/html5.png";
import css from "../../assets/skills/css.png";
import javascript from "../../assets/skills/js.png";
import betterBuysImg from "../../assets/projects/better-buys.jpg";
import node from "../../assets/skills/nodejs-logo-1.png";
import express from "../../assets/skills/ExpressJS.png";
import mongo from "../../assets/skills/mongo.png";
import optimumFitnessImg from "../../assets/projects/optimum-fitness.jpg";
import meatMeOnceImg from "../../assets/projects/meat-me-once.jpeg";

const Projects = () => {
  const projectsList = [
    {
      id: "meat-me-once",
      title: "Meat Me Once",
      description:
        "Meat delivery Licious clone 'Meat Me Once'. A licious clone having features of adding the products to cart and UI/UX clone according to licious.",
      image: meatMeOnceImg,
      github: "https://github.com/amar0705/spurious-picture-648",
      live: "https://flourishing-puppy-c8ecbd.netlify.app/",
      techStack: [
        { name: "HTML5", logo: html },
        { name: "CSS3", logo: css },
        { name: "JavaScript", logo: javascript },
      ],
    },
    {
      id: "optimum-fitness",
      title: "Optimum Fitness",
      description:
        "Eat smater, Live better. A website where you can track your diet, exercise,and health data. Have a alot of features to check on your used calories and calculate bmi etc.",
      image: fitoryxImg,
      github: "https://github.com/Sayeda-5/Sayeda-5-envious-society-6497-",
      live: "https://singular-babka-0ed0b3.netlify.app/",
      techStack: [
        { name: "HTML5", logo: html },
        { name: "CSS3", logo: css },
        { name: "JavaScript", logo: javascript },
      ],
    },
    {
      id: "better-buys",
      title: "Better Buys",
      description:
        "An e-commerce website project for buying the product, along with the proper support of backend API's and storing the data in Mongo Atlas.",
      image: betterBuysImg,
      github: "https://github.com/amar0705/tangible-robin-3650",
      live: "https://quiet-phoenix-56b570.netlify.app/",
      techStack: [
        { name: "HTML5", logo: html },
        { name: "CSS3", logo: css },
        { name: "JavaScript", logo: javascript },
        { name: "Node JS", logo: node },
        { name: "Express", logo: express },
        { name: "MonogoDB", logo: mongo },
      ],
    },
    {
      id: "fitoryx",
      title: "Fitoryx",
      description:
        "An e-commerce platform for purchasing fitness items, as well as track your diet, exercise, and health data. Features also include checking on your used calories, calculate bmi etc.",
      image: optimumFitnessImg,
      github: "https://github.com/amar0705/embarrassed-cracker-4420/tree/main",
      live: "https://bejewelled-kashata-4b35af.netlify.app/",
      techStack: [
        { name: "HTML5", logo: html },
        { name: "CSS3", logo: css },
        { name: "JavaScript", logo: javascript },
        { name: "Node JS", logo: node },
        { name: "Express", logo: express },
        { name: "MonogoDB", logo: mongo },
      ],
    },
  ];
  return (
    <>
      <Box mt={10} sx={{ display: "flex", flexGrow: 1, flexShrink: 0, flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h2" align="center">
            My Projects
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={boxStyling}>
              <img
                src={projects}
                alt="projects"
                style={{
                  width: "75%",
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
                My projects make use of a vast variety of latest technology tools. My best
                experience is to create NodeJS Backend Projects and React Project. Below are some of
                my projects. Note that not all of the mentioned projects are on GitHub yet.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={10}>
          {projectsList.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <ProjectsData project={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
