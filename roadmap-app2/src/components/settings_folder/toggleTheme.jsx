import {useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.jsx';




const ToggleTheme =() => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    useEffect(()=> {
        document.body.className = theme;
    } ,[theme]);

    return (
        <>
        <div className='toggle-theme-container'>
        <h1>Toggle Theme</h1>
        <div className='toggle-labels'>
            <label>
            <input
            type="radio"
            name="theme"
            value="light"
            checked = {theme ==='light'}
            onChange={()=> toggleTheme('light')}
            
            />
            Light
        </label>

        <label>
            <input
            type="radio"
            name="theme"
            value="dark"
            checked = {theme ==='dark'}
            onChange={()=> toggleTheme('dark')}
            
            />
            Dark
        </label>

        </div>

        </div>
        
        
        </>
    );
};

export default ToggleTheme;