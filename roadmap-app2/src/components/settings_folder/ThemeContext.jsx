import {createContext, useState} from 'react';

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {}
});

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };
    return (
        <ThemeContext.Provider value ={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    
    );
};

