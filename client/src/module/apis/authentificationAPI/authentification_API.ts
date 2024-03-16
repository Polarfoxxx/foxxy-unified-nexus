
import axios from "axios";

const AUTHENTIFICATION_API = {
  loginUser_API,
  saveData_API
};
export default AUTHENTIFICATION_API;


async function registerNewUser_API() {
  try {
    const RESPO_DATA = await axios.post("http://localhost:4000/register/newUser", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(RESPO_DATA);

  } catch (error) {
    console.log(error);
  };
};

/* --------------------------------------------------------------------------------------- */
async function loginUser_API(loginData: { userNames: string, password: string }): Promise<{ status: number, jwt: string, theme:string} | undefined> {
  const LOGIN_DATA = {
    usernames: loginData.userNames,
    password: loginData.password
  };

  try {
    const RESPO_DATA = await axios.post("http://localhost:4000/login/user", LOGIN_DATA, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(RESPO_DATA);
    
    return {
      status: RESPO_DATA.status,
      jwt: RESPO_DATA.data.token,
      theme: RESPO_DATA.data.returned_theme

    };
  } catch (error) {
    console.log(error);
  };
};

/* --------------------------------------------------------------------------------------- */
async function saveData_API(user: string, saveData: { custom?: { theme?: string }, data?: { events?: [], messages?: [] } }): Promise<{ status: number } | undefined> {

  if (saveData.custom) {
    const DATA_FORAPI = {
      userName: user,
      save_Data: {
        custom: saveData.custom
      }
    }

    try {
      const RESPO_DATA = await axios.post("http://localhost:4000/save/data", DATA_FORAPI, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return {
        status: RESPO_DATA.status,

      };
    } catch (error) {
      console.log(error);
    };
  };
};


