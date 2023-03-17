import "./App.css";
import HomePage from "./pages/homePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/fira-code";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d972eb",
    },
    navbar: {
      main: "#fff",
    },
    typoText: {
      main: "#000",
      secondary: "#868e96",
    },
  },
  typography: {
    h2: {
      fontWeight: 1000,
      fontSize: "4.5rem",
      "@media (max-width:700px)": {
        fontSize: "2.8rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      "@media (max-width:700px)": {
        fontSize: "1.3rem",
      },
    },
    fontFamily: ["Nunito", "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage></HomePage>
    </ThemeProvider>
  );
}

export default App;
