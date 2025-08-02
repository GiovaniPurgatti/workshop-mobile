import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import  AsyncStorage  from '@react-native-async-storage/async-storage'
export type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children } : { children : ReactNode}) => {
    const [theme, setThemeState] = useState<ThemeType>('light');

    useEffect(() => {
        AsyncStorage.getItem('APP_THEME').then((savedTheme: string | null) => {
            if(savedTheme === 'light' || savedTheme === 'dark') {
                setThemeState(savedTheme);
            }
        });
    }, [])

    const setTheme = (newTheme: ThemeType) =>{
        setThemeState(newTheme);
        AsyncStorage.setItem('APP_THEME', newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context
}