import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Tooltip } from "@mui/material";
import github from "../../assets/png/github.png";

export default function ProjectsData({ project }) {
  return (
    <div className="project-card">
      <Card sx={{ width: "100%" }}>
        <span className="project-title">
          <CardHeader title={project.title} />
        </span>
        <CardMedia component="img" height="320" image={project.image} alt={project.id} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <span className="project-description">{project?.description}</span>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              {project.techStack.map((item) => (
                <Tooltip title={item.name} key={item.name}>
                  <IconButton key={item.name}>
                    <img src={item.logo} alt={item.name} style={{ height: "30px" }} />
                  </IconButton>
                </Tooltip>
              ))}
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ display: "flex", justifyContent: "right", gap: 2, alignItems: "center" }}>
                <a href={project.github} target="blank" className="project-github-link">
                  <IconButton>
                    <img src={github} alt="github-link" style={{ height: "30px" }} />
                  </IconButton>
                </a>
                <a href={project.live} target="blank" className="project-deployed-link">
                  <Button variant="contained">
                    <Typography variant="body1" color="#fff" sx={{ fontWeight: 600 }}>
                      View Live
                    </Typography>
                  </Button>
                </a>
              </Box>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}
