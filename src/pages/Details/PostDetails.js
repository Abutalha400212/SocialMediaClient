import React, { useContext, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Card, Input, Link } from "@mui/material";
import Face from "@mui/icons-material/Face";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Components/Auth/Context/AuthProvider";

import HomeLayOut from "../../layout/HomeLayOut";
import { AxiosInstance } from "../../utilis/AxiosInstance";

const PostDetails = () => {
  const post = useLoaderData()
console.log(post)
  // AxiosInstance.get(`posts-details/${id}`).then((data) => {
  //   setPost(data);
  // });
  console.log(post)
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const { profile, img, like, title, name, date, comment, _id } = post;
  const [value, setValue] = useState(like);
  console.log(value);

  AxiosInstance.put(`posts/${_id}`, {
    like: value,
  }).then(function (response) {
    if (response.data.acknowledged) {
    }
  });

  const handleComment = (data) => {
    const text = data.comment;
    const date = new Date();
    const datePiker = date[Symbol.toPrimitive]("string").split(" ")[4];
    const comments = {
      text: text,
      name: user?.displayName,
      photo: user?.photoURL,
      time: datePiker,
    };
    AxiosInstance.put(`comment/${_id}`, { comment: comments }).then(function (
      response
    ) {
      if (response.data.acknowledged) {
        toast.success("Valuable Comment Submitted");
        reset();
      }
    });
  };
  return (
    <HomeLayOut>
      <Card sx={{ maxWidth: { md: 450 }, mx: "auto", pb: 4 }}>
        <Box>
          <CardMedia
            component="img"
            height="50%"
            sx={{
              minWidth: { md: 450 },
            }}
            image={img}
            alt="No Photo"
          />
          <CardHeader
            avatar={<Avatar alt="user" src={profile}></Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={name}
            subheader={date}
          />
          <Box
            sx={{
              ml: 1,
            }}
          >
            <IconButton
              onClick={() => setValue(value + 1)}
              component="label"
              variant="plain"
              color="neutral"
              size="sm"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton variant="plain" color="neutral" size="sm">
              <ModeCommentOutlined />
            </IconButton>
            <IconButton variant="plain" color="neutral" size="sm">
              <SendOutlined />
            </IconButton>
          </Box>
          <CardContent>
            <Link
              component="button"
              underline="none"
              fontSize="sm"
              fontWeight="lg"
              textColor="text.primary"
            >
              {like < 1 ? "No Like" : like}
              {like === 1 && "like"}
              {like > 1 && "likes"}
            </Link>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
          <Box
            component="form"
            onSubmit={handleSubmit(handleComment)}
            sx={{ display: "flex", px: 1, mr: 2 }}
          >
            <IconButton size="sm" variant="plain" color="neutral">
              <Face />
            </IconButton>
            <Input
              size="sm"
              required
              {...register("comment")}
              placeholder="Add a comment…"
              sx={{ flexGrow: 1, mr: 2 }}
            />
            <Button type="submit" variant="contained" underline="none">
              Post
            </Button>
          </Box>
        </Box>
        {comment && comment.map((item) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
              px: 2,
              gap: 1,
            }}
          >
            <Avatar alt="Remy Sharp" src={item?.photo} />
            <Box
              sx={{
                backgroundColor: "lightgray",
                width: "100%",
                px: 2,
                py: 1,
                borderRadius: "10px",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {item?.name}
              </Typography>
              <Typography variant="body2">{item?.text}</Typography>
            </Box>
          </Box>
        ))}
      </Card>
    </HomeLayOut>
  );
};
export default PostDetails;
