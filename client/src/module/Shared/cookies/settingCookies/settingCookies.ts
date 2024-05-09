import { type_from_loginUser_API_returned } from "../../../apis/authentificationAPI";
export type Type_for_cookie = {
    login: type_from_loginUser_API_returned
}

function settingCookies(props: Type_for_cookie) {
    if (!document.cookie) {
        // Vytvoriť novú cookie, ak používateľ nemá žiadne uložené cookies
        document.cookie = `user_${props.login.userName}={ "JWT": "${props.login.jwt}", "theme": "${props.login.theme}" }; max-age=3600`;
    } else {
        // Užívateľ má uložené cookies, takže budeme skúmať ich hodnoty
        const cookies = document.cookie.split(';');

        // Prejdeme cez všetky cookies
        let userCookieFound = false;
        cookies.forEach(cookie => {
            const cookieParts = cookie.split('=');
            const cookieName = cookieParts[0].trim();

            // Ak nájdeme cookies pre tohto používateľa, aktualizujeme ich hodnoty
            if (cookieName.startsWith(`user_${props.login.userName}`)) {
                userCookieFound = true;
                document.cookie = `user_${props.login.userName}={ "JWT": "${props.login.jwt}", "theme": "${props.login.theme}" }; max-age=3600`;
            }
        });

        // Ak sme nenašli cookies pre tohto používateľa, vytvoríme ich
        if (!userCookieFound) {
            document.cookie = `user_${props.login.userName}={ "JWT": "${props.login.jwt}", "theme": "${props.login.theme}" }; max-age=3600`;
        }
    }

}

export default settingCookies;