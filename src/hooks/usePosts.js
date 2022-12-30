import { useEffect, useState } from "react";
import { AxiosInstance } from "../utilis/AxiosInstance";


const usePosts = (email) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    let url =`posts`
    if(email){
        url = `${url}/${email}`
    }
    const getPosts = async () => { 
      setLoading(true)
      try {
        const { status, data } = await AxiosInstance.get(url)
        if (status === 200) {
          console.log(data)
          setPosts(data);
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        setError(error.response.data.message);
      }
    };
    getPosts();
  }, [email]);

  return [posts,loading,error];
};

export default usePosts;
