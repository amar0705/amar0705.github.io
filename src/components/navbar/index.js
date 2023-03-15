import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const classes = {
  fontWeight: 800,
  flexGrow: 1,
  fontFamily: "Courier New, monospace",
  fontSize: 28,
  lineHeight: 2,
};

export default function ButtonAppBar(props) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ flexGrow: 1 }} ml={10} mr={10}>
          <AppBar
            position="static"
            color="navbar"
            sx={{
              // boxShadow:
              //   "0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 5px 0px rgba(0,0,0,0.01), 0px 1px 10px 0px rgba(0,0,0,0.02)",
              boxShadow: "none",
            }}
          >
            <Toolbar>
              <Typography variant="h5" component="div" sx={classes}>
                {`< Amarjeet />`}
              </Typography>
              <Button color="inherit" sx={{ padding: "10px 30px", fontWeight: 700 }}>
                Home
              </Button>
              <Button color="inherit" sx={{ padding: "10px 30px", fontWeight: 700 }}>
                Projects
              </Button>
              <Button color="inherit" sx={{ padding: "10px 30px", fontWeight: 700 }}>
                Contact
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box ml={20} mr={20}>
          {props.children}
        </Box>
      </Box>
    </>
  );
}
