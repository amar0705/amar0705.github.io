import { Box, Grid, Typography } from "@mui/material";
import { boxStyling } from "../banner/bannerCss";
import { useEffect, useRef } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar.min.js";
import "github-calendar/dist/github-calendar.css";
import "github-calendar/dist/github-calendar-responsive.css";

const GitCalendar = () => {
  const calendarRef = useRef(null);
  useEffect(() => {
    GitHubCalendar(calendarRef.current, "amar0705", { responsive: true });
  }, []);
  return (
    <>
      <Box mt={10} sx={{ display: "flex", flexGrow: 1, flexShrink: 0, flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }} mb={10}>
          <Typography variant="h2" align="center">
            My Github Calendar
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box sx={boxStyling}>
              <div
                className="react-activity-calendar"
                ref={calendarRef}
                style={{ width: "100%" }}
              ></div>
            </Box>{" "}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GitCalendar;
