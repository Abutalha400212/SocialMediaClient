import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { createUsers, imageUpload} from "../../utilis/Api/Api";
import { AuthContext } from "../../Components/Auth/Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser,
    updateUser,googleLogin} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
  } = useForm();
  const handleRegister = (data) => {
    const formData = new FormData();
    formData.append("image", data.file[0]);
    imageUpload(formData).then((imgData) => {
      const user = {
        image: imgData.data.url,
        name: data.name,
        email: data.email,
      };
      createUser(data.email, data.password)
        .then((result) => {
          updateUser(data.name, imgData.data.url)
            .then(() => {
              createUsers(user).then((usedata) => {
                if (usedata.acknowledged) {
                  toast.success(`Hi, ${data.name},Your Account has Created Successfully`);
                  navigate('/')
                }
              });
            })
            .catch((err) =>toast.error(err.message));
        })
        .catch((err) =>toast.error(err.message));
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
      <CssBaseline />
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
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleRegister)}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="Name"
                required
                fullWidth
                {...register("name")}
                id="firstName"
                label="First Name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                {...register("email")}
                id="email"
                label="Email Address"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                {...register("password")}
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden {...register("file")} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Do you want to get Membership."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{bgcolor:"light",px:5,py:1,mt:2,borderRadius:"30px"}}>
          <Typography sx={{fontFamily:"serif",fontSize:"20px"}} align="center">Sign in with Google</Typography>
          <Box sx={{width:"50%",mx:"auto",}}>
            <IconButton onClick={handleLoginWithPopUp} sx={{width:"100%"}}>
              <GoogleIcon fontSize="large" color="primary"/>
            </IconButton>
          </Box>
          </Box>
      </Box>
    </Container>
  );
}
