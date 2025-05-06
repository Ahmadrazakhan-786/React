import { createContext,useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [darkmode, setdarkmode] = useState(false);

    const toggleTheme = () => setdarkmode(prev=>!prev);

    return(
        <ThemeContext.Provider value={{darkmode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}