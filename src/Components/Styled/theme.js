import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#DC136C",
    },
    secondary: {
      main: "#579BB1",
    },
    success:{
      main:"#FF7000"
    },
    purple: {
      main:"#B08BBB",
    },
    green: {
      main: "#379237",
    },
  },

  components: {
    MuiButton: {
      styleOverrides:{
        root:{
          textTransform:"capitalize"
        }
      }
    },
  },
});
