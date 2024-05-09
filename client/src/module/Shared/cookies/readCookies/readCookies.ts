
export type Type_for_readCookies = {
    userName: string
}

function readCookies(props: Type_for_readCookies): { JWT: string, theme: string } {
    // Získať všetky cookies
    const cookies = document.cookie.split(';');

    // Prejsť cez všetky cookies a nájsť tú, ktorú potrebujete
    let userCookie;
    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name === `user_${props.userName}`) {
            userCookie = value;
        }
    });

    // Ak bola nájdená cookies, získať hodnoty JWT a témy
    if (userCookie) {
        const { JWT, theme } = JSON.parse(userCookie);
        console.log("JWT token:", JWT);
        console.log("Theme:", theme);
        return {
            JWT, theme
        }
    } else {
        console.log("Cookie s používateľským menom nebola nájdená.");
        return{
            JWT:"",
            theme:""
        }
    }
};

export default readCookies;