import React from 'react';
import { AUTHENTIFICATION_API } from '../../apis/index.';


type Type_for_colorSwitcher = {
    themedDivRef: React.MutableRefObject<HTMLDivElement | null>
}

function ColorSwitcher(props: Type_for_colorSwitcher): JSX.Element {
    const [app_theme, setApp_theme] = React.useState("")

    /* nacitanie nstavej farby z db */
    React.useEffect(() => {
        const LOAD_THEME = sessionStorage.getItem("theme")
        if (LOAD_THEME !== null) {
            props.themedDivRef.current?.setAttribute("data-theme", LOAD_THEME);
            setApp_theme(LOAD_THEME)
        }
    }, []);

    const handleColorChange = (selectTheme: string) => {
        props.themedDivRef.current?.setAttribute("data-theme", selectTheme);
        setApp_theme(selectTheme)
        save_theme(selectTheme)
    };

    async function save_theme(selectTheme: string) {
        // Volanie funkcie
        const user = 'polarFoxx';
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
        }
    }



    return (
        <div className=' w-full h-full'>
            <label htmlFor="colorSwitcher">Vyberte barvu:</label>
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
