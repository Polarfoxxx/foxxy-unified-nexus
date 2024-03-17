import React from 'react';
import { AUTHENTIFICATION_API } from '../../apis/index.';
import { Container } from '../../Container';

type Type_for_colorSwitcher = {
    themedDivRef: React.MutableRefObject<HTMLDivElement | null>
}

function ColorSwitcher(props: Type_for_colorSwitcher): JSX.Element {
    const { appData } = React.useContext(Container.Context);
    const [app_theme, setApp_theme] = React.useState("");

    /* nacitanie nstavej farby z db */
    React.useEffect(() => {
        const LOAD_THEME = appData.userLogData.appTheme
        LOAD_THEME &&
            props.themedDivRef.current?.setAttribute("data-theme", LOAD_THEME);
        setApp_theme(LOAD_THEME)
    }, []);

    const handleColorChange = (selectTheme: string) => {
        props.themedDivRef.current?.setAttribute("data-theme", selectTheme);
        setApp_theme(selectTheme);
     /*    save_theme(selectTheme); */
    };

    async function save_theme(selectTheme: string) {
        const Uer = sessionStorage.getItem("userDATA")
        if (Uer !== null) {
            const ff = JSON.parse(Uer)
            // Volanie funkcie
            const user = ff.userName;
            const customData = {
                custom: {
                    theme: selectTheme
                }
            };
            try {
                const result = await AUTHENTIFICATION_API.saveData_API(user, customData);
                console.log('Result:', result);
            } catch (error) {
                console.error('Error:', error);
            };
        };
    };



    return (
        <div className=' w-full h-full flex items-center justify-end p-2'>
            <label
                htmlFor="colorSwitcher">Vyberte barvu:</label>
            <select
                id="colorSwitcher"
                value={app_theme}
                onChange={(e) => handleColorChange(e.target.value)}>
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
        </div>
    );
};

export default ColorSwitcher;
