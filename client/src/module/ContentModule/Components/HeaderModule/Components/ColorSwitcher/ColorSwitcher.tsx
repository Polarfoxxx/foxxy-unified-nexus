import React from 'react';
import { createData_API } from '../../../../../apis/crudApi';
import { Type_for_saveDataTheme, Type_for_colorSwitcher } from './types';
import { updateCookie } from '../../../../../apis/cookie';
import { connect } from 'react-redux';
import { Type_RootState } from '../../../../../../redux';

function ColorSwitcher({themedDivRef, appTheme}: Type_for_colorSwitcher): JSX.Element {
    const [app_theme, setApp_theme] = React.useState("");

    /* nacitanie nstavej farby z db */
    React.useEffect(() => {
        const load_theme = appTheme;
        console.log(load_theme);
        
        load_theme &&
            themedDivRef.current?.setAttribute("data-theme", load_theme);
        setApp_theme(load_theme)
    }, [appTheme]);


    const handleColorChange = async (selectTheme: string) => {
        themedDivRef.current?.setAttribute("data-theme", selectTheme);
        setApp_theme(selectTheme);

        try {
            const create = await updateCookie(selectTheme);
            console.log(selectTheme);

            console.log('Result:', create);
        } catch (error) {
            console.error('Error:', error);
        };
    };


    return (
        <div className=' w-full h-full flex flex-row items-center gap-3 justify-end p-2 pr-8 bg-transparent'>
            <label
                className=' text-thems-defaultTextColorDark'
                htmlFor="colorSwitcher">
                Color theme:
            </label>
            <select
                className=' w-16 text-center rounded-md cursor-pointer'
                id="colorSwitcher"
                value={app_theme}
                onChange={(e) => handleColorChange(e.target.value)}>
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state: Type_RootState) => ({
    appTheme: state.userLogData.appTheme,
});

export default connect(mapStateToProps)(ColorSwitcher);

