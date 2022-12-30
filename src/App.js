import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./routes/routes";
import { theme } from "./Components/Styled/theme";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>{" "}
  </ThemeProvider>
  );
}

export default App;
