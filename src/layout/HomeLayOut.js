import { Box, Container, Grid } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Components/Auth/Context/AuthProvider";
import LeftSideBar from "../Components/Shared/LeftSideBar";
import RightSideBar from "../Components/Shared/RightSideBar";


const HomeLayOut = ({ children }) => {
  const {user} = useContext(AuthContext)
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, my: 5, px: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={3} sx={{ display: { xs: "none", md: "block" } }}>
            <LeftSideBar />
          </Grid>
          <Grid
            sx={{
              maxHeight: { md: "150vh" },
              overflowY: { md: "scroll" },
            }}
            item
            lg={6}
          >
            {children}
          </Grid>
          <Grid item lg={3} sx={{ display: { xs: "none", md: "block" } }}>
          {user &&   <RightSideBar />}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeLayOut;
