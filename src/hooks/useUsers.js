
import { useEffect, useState } from "react";
import { AxiosInstance } from "../utilis/AxiosInstance";



const useUsers = (email) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    let url =`users`
    if(email){
        url = `${url}/${email}`
    }
    const getUsers = async () => { 
      setLoading(true)
      try {
        const { status, data } = await AxiosInstance.get(url)
        if (status === 200) {
          setUsers(data);
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        setError(error.response.data.message);
      }
    };
    getUsers();
  }, [email]);

  return [users,loading,error];
};

export default useUsers;
