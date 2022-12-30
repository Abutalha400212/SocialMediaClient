import { Box, Divider, Skeleton, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../Components/Auth/Context/AuthProvider";
import MediaPostCard from "../../Components/Shared/MediaPostCard";
import PostBox from "../../Components/Shared/PostBox";
import usePosts from "../../hooks/usePosts";
import HomeLayOut from "../../layout/HomeLayOut";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [posts,loading] = usePosts();
  console.log(posts)

  // if (loading) {
  //   return (
  //     <Box sx={{ width: 300 }}>
  //       <Skeleton />
  //       <Skeleton animation="wave" />
  //       <Skeleton animation={false} />
  //     </Box>
  //   );
  // }
  return (
    <HomeLayOut>
      <Box>
        {user && <PostBox />}
        <Box
          sx={{
            textAlign: "center",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "serif",
              fontWeight: 700,
              mb: 0.7,
            }}
            variant="h5"
          >
            Top Trending Post
          </Typography>
          <Divider sx={{ width: "80%", mx: "auto" }} />
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: "30px",
          }}
        >
          {posts.map((post) => (
            <MediaPostCard key={post._id} post={post} />
          ))}
        </Box>
      </Box>
      {loading &&
          Array.from(new Array(3)).map((item) => (
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
    </HomeLayOut>
  );
};
export default Home;
