
import axios from "axios";

const AUTHENTIFICATION_API = {
    loginUser_API
};
export default AUTHENTIFICATION_API;



/*   async function registerNewUser_API(props: Type_forAuthentication_API): Promise<Type_forRespo_objekt | undefined> {
      const RESGISTER_DATA = {
        username: props.emailValue,
        password: props.passwordValue,
      };
    
      try {
        const RESPO_DATA = await axios.post("http://localhost:4000/register/newUser", RESGISTER_DATA, {
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
    } */

/* --------------------------------------------------------------------------------------- */
async function loginUser_API(loginData:{userName: string, password: string}): Promise<{status: number,
    message: string,} | undefined> {
    const LOGIN_DATA = {
        username: loginData.userName,
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
            message: RESPO_DATA.data.status,
        };
    } catch (error) {
        console.log(error);
    };
};


