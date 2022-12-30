import { AxiosInstance } from "../AxiosInstance";


export const imageUpload = async (image) => {
  try {
    const { data } = await AxiosInstance.post(
      "https://api.imgbb.com/1/upload?key=7125a6560c1df209e608d869494af6f2",
      image
    );
    return data;
  } catch (error) {
    console.log(error)
  }
};
export const createUsers = async (user) => {
  try {
    const { data } = await AxiosInstance.post(`users`,user)
    return data;
  } catch (error) {
    console.log(error)
  }
};
export const userInfo = async (email) => {
  try {
    const { data } = await AxiosInstance.get(`users/${email}`)
    return data;
  } catch (error) {
    console.log(error)
  }
};


