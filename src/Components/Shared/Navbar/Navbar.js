import React,{ useContext, useState }  from 'react'
import {Link, useNavigate} from "react-router-dom"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import toast from "react-hot-toast";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AuthContext } from "../../Auth/Context/AuthProvider";
import styled from '@emotion/styled';



 const RouterLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color:"ButtonText",
  fontWeight:700,


}));
const pages = [
  <RouterLink to="/">Home</RouterLink>,
  <RouterLink  to="/media">Media</RouterLink>,
  <RouterLink  to="/about">About</RouterLink>,
];


function Navbar() {
  const { user, logOut } = useContext(AuthContext);
const navigate = useNavigate()
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged Out");
      navigate('/')
    });
  };
  const authMethod = (
    <>
      
        <RouterLink to="/login"><Button color='secondary' variant="contained">Sign In </Button></RouterLink>
     
      <RouterLink to="/signup">
        <Button variant="contained">Sign Up</Button>
      </RouterLink>
    </>
  );
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://i.ibb.co/C9HNB4W/logo.png"
              alt="logo"
              width={50}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                  gap: 1,
                  px: 1,
                  textDecoration:"none"
                }}
              >
                {authMethod}
              </Box>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src="https://i.ibb.co/C9HNB4W/logo.png"
              alt="logo"
              width={50}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Newcleus
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {user ? (
            <IconButton color='inherit' onClick={handleLogOut}>
              <ExitToAppIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {authMethod}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
