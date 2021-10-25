import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/theme";

function App() {
    const [theme, setTheme] = useState("light");

    const toggleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Home setTheme={toggleThemeChange} />
        </ThemeProvider>
    );
}

export default App;
