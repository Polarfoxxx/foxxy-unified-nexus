
import axios from "axios";

const AUTHENTIFICATION_API = {
    loginUser_API
};
export default AUTHENTIFICATION_API;

registerNewUser_API()

  async function registerNewUser_API(): Promise<any | undefined> {
      try {
        const RESPO_DATA = await axios.post("http://localhost:4000/register/newUser", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return {
          status: RESPO_DATA.status,
          message: RESPO_DATA.data.message,
        };
    
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            return {
              status: error.response.status,
              message: error.response.data.message,
            };
          }
        }
      }
    } 

/* --------------------------------------------------------------------------------------- */
async function loginUser_API(loginData:{userNames: string, password: string}): Promise<{status: number, jwt: string} | undefined> {
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
        return {
            status: RESPO_DATA.status,
            jwt: RESPO_DATA.data.token,

        };
    } catch (error) {
        console.log(error);
    };
};


