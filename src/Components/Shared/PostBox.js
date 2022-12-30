import React from "react"
import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";

import { imageUpload } from "../../utilis/Api/Api";
import { MediaBox } from "../../pages/Home/HomeStyled";
import { FlexBox } from "../Styled/Style";
import { AuthContext } from "../Auth/Context/AuthProvider";
import { AxiosInstance } from "../../utilis/AxiosInstance";
const PostBox = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit,reset} = useForm();

  const handlePost = (data) => {
    const formData = new FormData();
    formData.append("image", data.file[0]);
    const event = new Date();
    imageUpload(formData).then((imgData) => {
      const post = {
        title: data.title,
        img: imgData.data.url,
        date: event.toDateString(),
        name: user?.displayName,
        profile: user?.photoURL,
        email:user?.email,
        like: 0,
        comment:[],
      };
      AxiosInstance.post(`posts`, post).then(function (
        response
      ) {
        if (response.data.acknowledged) {
          toast.success("Post Added");
          reset();
        }
      });
    });
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(handlePost)}
      sx={{
        borderRadius: "5px",
        mx: "auto",
        mb: 3,
        p: 1,
      }}
      elevation={1}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar alt="Remy Sharp" src={user?.photoURL} />
        <MediaBox>
          <TextareaAutosize
          {...register('title')}
          required
            placeholder={`Whats on Your Mind, ${user?.displayName} ?`}
          />
        </MediaBox>
      </Box>
      <Divider sx={{ my: 1 }} />
      <FlexBox justifyContent="space-between">
        <Button component="label">
          <CollectionsIcon />
          <input required type="file" hidden {...register("file")} />
          Photos
        </Button>
        <Button color="secondary">
          <VideoCallIcon /> <Typography>Live</Typography>
        </Button>
        <Button color="success">
          <AddReactionIcon /> <Typography>Feeling/Activity</Typography>
        </Button>
      </FlexBox>

      <Button
        sx={{
          my: 1,
        }}
        fullWidth
        variant="contained"
        type="submit"
      >
        Post
      </Button>
    </Paper>
  );
};

export default PostBox;
