import { Box, Grid, Typography } from "@mui/material";
import { boxStyling } from "../banner/bannerCss";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@mui/material/styles";

const GitCalendar = () => {
  const theme = useTheme();
  return (
    <>
      <Box mt={10} sx={{ display: "flex", flexGrow: 1, flexShrink: 0, flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }} mb={10}>
          <Typography variant="h2">My Github Statistics</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box sx={boxStyling}>
              <div className="react-activity-calendar">
                <GitHubCalendar
                  username="amar0705"
                  color={theme.palette.primary.main}
                ></GitHubCalendar>
              </div>
            </Box>{" "}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GitCalendar;
