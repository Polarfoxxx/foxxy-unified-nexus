import { type_for_loginUser_API, type_from_loginUser_API_returned } from "./types";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";
import { createCookie } from "../cookie";

const AUTHENTIFICATION_API = {
  loginUser_API,
};
export default AUTHENTIFICATION_API;


/* async function registerNewUser_API() {
  try {
    const RESPO_DATA = await axios.post(`${BASE_URL}register/newUser`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  };
};
 */
/* --------------------------------------------------------------------------------------- */
axios.defaults.withCredentials = true;
async function loginUser_API(loginData: type_for_loginUser_API): Promise<type_from_loginUser_API_returned | undefined> {
  const LOGIN_DATA = {
    username: loginData.userNames,
    password: loginData.password
  };
  try {
    const response = await axios.post(`${BASE_URL}login/user`, LOGIN_DATA, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
   /*  createCookie()  */  //volanie funkcie ktora vola cookie z vlatneho api pre cookie  
    return {
      userName: response.data.username,
      status: response.status,
      jwt: response.data.token,
      theme: response.data.theme,
    };
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      console.log("Stavový kód chyby:", error.response.status);
      return {
        userName: "",
        status: error.response.status,
        jwt: "",
        theme: "",
      };
    };
  };
};




