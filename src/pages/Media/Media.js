import { Box, Skeleton } from "@mui/material";
import MediaPostCard from "../../Components/Shared/MediaPostCard";
import usePosts from "../../hooks/usePosts";
import HomeLayOut from "../../layout/HomeLayOut";

const Media = () => {
  const [posts,loading] = usePosts();
  return (
    <HomeLayOut>
      <Box>
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
          Array.from(new Array(6)).map((item) => (
            <Box sx={{ width: "100%" }}>
              <Skeleton
                width={500}
                height={350}
                variant="text"
                sx={{
                  mx: "auto",
                }}
                animation="wave"
              />
              <Skeleton  width={500} height={50} variant="text"  sx={{
                  mx: "auto",
                }}
                animation="wave" />
              <Skeleton  width={500} height={100} variant="text"  sx={{
                  mx: "auto",
                }}
                animation="wave" />
            </Box>
          ))}
    </HomeLayOut>
  );
};

export default Media;
