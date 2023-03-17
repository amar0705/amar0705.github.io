import { Box, Grid, Typography } from "@mui/material";
import { boxStyling } from "../banner/bannerCss";
import { useTheme } from "@mui/material/styles";

const Stats = () => {
  const theme = useTheme();
  const themeTitleColor = theme.palette.primary.main.replace("#", "");
  return (
    <>
      <Box mt={10} sx={{ display: "flex", flexGrow: 1, flexShrink: 0, flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }} mb={10}>
          <Typography variant="h2">My Github Statistics</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={boxStyling}>
              <img
                id="github-top-langs"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=amar0705&title_color=000`}
                alt="portfolio"
                style={{ width: "75%" }}
              />
            </Box>{" "}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={boxStyling}>
              <img
                id="github-stats-card"
                src={`https://github-readme-stats.vercel.app/api?username=amar0705&show_icons=true&title_color=000&icon_color=${themeTitleColor}`}
                alt="portfolio"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Stats;
