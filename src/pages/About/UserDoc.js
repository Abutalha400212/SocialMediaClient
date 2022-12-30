import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import MediaPostCard from "../../Components/Shared/MediaPostCard";
import PostBox from "../../Components/Shared/PostBox";


const UserDoc = ({ profile, posts }) => {
  //   const { register, handleSubmit, getValues } = useForm();

  const handlePost = (event) => {
    const form = event.target;

    console.log(form);
    // const formData = new FormData();
    // if (data.image) {
    //   formData.append("image", data.image[0]);
    // } else {
    //   formData.append("cover", data.cover[0]);
    // }
    // console.log(formData);
    // imageUpload(formData).then((imgData) => {});
  };
  return (
    <Container>
      <Box
        component="form"
        sx={{
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: { md: 300 },
            objectFit: "cover",
            mt: 1,
          }}
          image="https://i.ibb.co/chfjZ50/p3.jpg"
          alt="cover"
        ></CardMedia>
        <Box>
          <Box
            component="label"
            sx={{
              cursor: "pointer",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={profile?.image}
              sx={{
                width: 150,
                height: 150,
                position: "absolute",
                bottom: -80,
                left: 5,
              }}
            />
            <input required type="file" hidden name="image" />
          </Box>
          <Button
            sx={{
              position: "absolute",
              right: 6,
              bottom: 7,
            }}
            component="label"
            variant="contained"
          >
            <input required type="file" hidden />
            Edit Cover Phote
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          mt: { md: 5, xs: 12 },
          width: { md: "70%" },
          ml: { md: 28 }
        }}
      >
        <Box>
          <PostBox />
          <Box
            sx={{
              display: "grid",
              gap: "20px",
            }}
          >
            {posts.map((post) => (
              <MediaPostCard post={post} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default UserDoc;
