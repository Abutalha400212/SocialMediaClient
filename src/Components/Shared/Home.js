import { Box, Divider, Skeleton, Typography } from "@mui/material";
import { width } from "@mui/system";
import { useContext, useState } from "react";
import usePosts from "../../hooks/usePosts";
import { AuthContext } from "../Auth/AuthProvider";
import HomeLayOut from "../HomeLayOut";
import useSendPost from "../hooks/useSendPost";
import { Posts } from "../utilis/Api/Api";
import { AxiosInstance } from "../utilis/AxiosInstance";
import MediaPostCard from "./MediaPostCard";
import PostBox from "./PostBox";

const Home = () => {
  const { user} = useContext(AuthContext);
  const [posts,loading] = usePosts();
  return (
    <HomeLayOut>
      <Box>
        {user && <PostBox />}
        <Box sx={{
          textAlign:"center",
          mb:2
        
        }}>
          <Typography sx={{
  fontFamily:"serif",
  fontWeight:700,
  mb:0.7
          }} variant="h5">
            Top Trending Post
          </Typography>
          <Divider sx={{width:"80%",mx:"auto"}}/>
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: "30px",
            maxWidth:420
          }}
        >
          {posts.slice(0,3).map((post) => (
            <MediaPostCard key={post._id} post={post} />
          ))}
        </Box>
      </Box>
      {loading &&
          Array.from(new Array(6)).map((item) => (
            <Box sx={{ width: 350 }}>
              <Skeleton
                width="100%"
                height={350}
                variant="text"
                sx={{
                  mx: "auto",
                }}
                animation="wave"
              />
              <Skeleton width={350} height={50} variant="text" />
              <Skeleton width={350} height={100} variant="text" />
              <Skeleton width={350} height={100} variant="text" />
              <Skeleton width={350} height={100} variant="text" />
             
            </Box>
          ))}
    </HomeLayOut>
  );
};
export default Home;


