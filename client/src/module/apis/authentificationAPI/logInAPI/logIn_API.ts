import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { type_for_loginUser_API, type_from_loginUser_API_returned } from "./types";

async function logInUser_API(loginData: type_for_loginUser_API): Promise<type_from_loginUser_API_returned | undefined> {
  const LOGIN_DATA = {
    username: loginData.userNames,
    password: loginData.password
  };

  try {
    const response = await axios.post(`${BASE_URL}logIn/user`, LOGIN_DATA, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      userName: response.data.username, // Ensure response.data has a username property
      status: response.status,
      jwt: response.data.token, // Ensure response.data has a token property
      theme: response.data.theme, // Ensure response.data has a theme property
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.response?.data || error.message);
      return {
        userName: "", // Ensure response.data has a username property
        status: error.response?.status || 0,
        jwt: "", // Ensure response.data has a token property
        theme: "", // Ensure response.data has a theme property
      };
      
    } else {
      console.error("Unexpected error: ", error);
    }
    return undefined;
  }
};

export default logInUser_API;
