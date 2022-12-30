import { Box, Container, Grid, Skeleton } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Auth/Context/AuthProvider";
import ProfileModal from "../../Components/Shared/Modal/ProfileModal";
import usePosts from "../../hooks/usePosts";
import { userInfo } from "../../utilis/Api/Api";
import PersonalInfoBar from "./PersonalInfoBar";
import UserDoc from "./UserDoc";

const About = () => {
  const { user, open, setOpen } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  console.log(profile)
  const [posts,loading] = usePosts(user?.email);
  userInfo(user?.email).then((data) => {
    setProfile(data);
  });

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <PersonalInfoBar profile={profile} setOpen={setOpen} />
        </Grid>
        <Grid item md={8} xs={12}>
          <UserDoc profile={profile} posts={posts} />
        </Grid>
      </Grid>
      {open && <ProfileModal profile={profile} />}
      {loading &&
          Array.from(new Array(6)).map((item) => (
            <Box sx={{ width: 350 }}>
              <Skeleton
                width={350}
                height={350}
                variant="text"
                sx={{
                  mx: "auto",
                }}
                animation="wave"
              />
              <Skeleton width={350} height={50} variant="text" />
              <Skeleton width={350} height={100} variant="text" />
              <Skeleton
                width={100}
                height={70}
                variant="text"
                sx={{
                  mx: "auto",
                }}
              />
            </Box>
          ))}
    </Container>
  );
};

export default About;
