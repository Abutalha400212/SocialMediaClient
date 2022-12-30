import React from "react";
import { Link } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Card, Input } from "@mui/material";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Auth/Context/AuthProvider";
import { AxiosInstance } from "../../utilis/AxiosInstance";
export default function MediaPostCard({ post }) {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const { title, img, date, name, profile, _id, like, comment } = post;
  const [value, setValue] = useState(like);

  AxiosInstance.put(`posts/${_id}`, {
    like: value
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
        toast.success("WoH, Done");
        reset();
      }
    });
  };
  return (
    <Box
      sx={{
        minHeight: 10,
      }}
    >
      <Card
        sx={{
          width: "100%",

          mx: "auto",
          boxShadow: "0.5px 0.5px 50px light",
        }}
      >
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
        <CardMedia component="img" height="50%" image={img} alt="No Pictire" />
        <Box sx={{ mt: 1, ml: 1 }}>
          <IconButton
            disabled={!user}
            sx={{
              position: "relative",
            }}
            size="sm"
          >
            <FavoriteIcon onClick={() => setValue(value + 1)} color="primary" />
            <span
              style={{
                position: "absolute",
                top: -2,
                right: 3,
                color: "blueviolet",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              {value}
            </span>
          </IconButton>
          <IconButton
            sx={{
              position: "relative",
            }}
            variant="plain"
            color="neutral"
            size="sm"
          >
            <ModeCommentOutlined />
            <span
              style={{
                position: "absolute",
                top: -2,
                right: 3,
                color: "blueviolet",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              {comment.length}
            </span>
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <CardContent
          sx={{
            minHeight: "5%",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <Box
          onSubmit={handleSubmit(handleComment)}
          component="form"
          sx={{ display: "flex", mx: 1, pr: 3 }}
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
          <Button
            disabled={!user}
            size="small"
            type="submit"
            variant="contained"
            underline="none"
          >
            Post
          </Button>
        </Box>

        {comment.length > 0 &&
          comment.slice(0, 1).map((com) => (
            <CardActions
              sx={{
                display: "flex",
                maxWidth: "80%",
                px: 2,
                mt: 0.2,
                gap: 1,
              }}
            >
              <IconButton href="/" LinkComponent="a">
                <Avatar
                  sx={{
                    cursor: "pointer",
                  }}
                  alt="Remy Sharp"
                  src={com?.photo}
                />
              </IconButton>
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  width: "100%",
                  px: 2,
                  py: 1,
                  borderRadius: "10px",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {com?.name}
                </Typography>
                <Typography variant="body2">{com?.text}</Typography>
              </Box>
            </CardActions>
          ))}
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "start",
            ml: 1,
            "& .link": {
              textDecoration: "none",
              color: "gray",
            },
            "&  .link:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Link className="link" variant="body2" to={`posts-details/${_id}`}>
            View More{" "}
            {comment.length > 1 &&
              `${comment.length - 1} ${
                comment.length > 2 ? "commnets" : "comment"
              }`}
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
