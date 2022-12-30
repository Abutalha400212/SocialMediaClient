import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Components/Auth/Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const { signIn,googleLogin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(from, { replace: true });
          toast.success("User Login Successfully");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
const handleLoginWithPopUp = ()=>{
  googleLogin().then((result) => {
    const user = result.user;
    if (user) {
      navigate(from, { replace: true });
      toast.success("User Login Successfully");
    }
  })
  .catch((err) => {
    toast.error(err.message);
  });
}

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton>
          <img src="https://i.ibb.co/C9HNB4W/logo.png" alt="" width={70} />
        </IconButton>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleLogin)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            {...register("email")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            {...register("password")}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{ bgcolor: "light", px: 5, py: 1, mt: 2, borderRadius: "30px" }}
        >
          <Typography
            sx={{ fontFamily: "serif", fontSize: "20px" }}
            align="center"
          >
            Sign in with Google
          </Typography>
          <Box sx={{ width: "50%", mx: "auto" }}>
            <IconButton onClick={handleLoginWithPopUp} sx={{ width: "100%" }}>
              <GoogleIcon fontSize="large" color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
