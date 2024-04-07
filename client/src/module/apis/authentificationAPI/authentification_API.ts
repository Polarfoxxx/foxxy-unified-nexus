import { type_for_loginUser_API, type_from_loginUser_API_returned } from "./types";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";

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
async function loginUser_API(loginData: type_for_loginUser_API): Promise<type_from_loginUser_API_returned | undefined> {
  const LOGIN_DATA = {
    username: loginData.userNames,
    password: loginData.password
  };
  try {
    const RESPO_DATA = await axios.post(`${BASE_URL}login/user`, LOGIN_DATA, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      userName: RESPO_DATA.data.username,
      status: RESPO_DATA.status,
      jwt: RESPO_DATA.data.token,
      theme: RESPO_DATA.data.returned_theme
    };
  } catch (error) {
    console.log(error);
  };
};



