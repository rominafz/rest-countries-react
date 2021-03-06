import React from "react";
export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
  //theme = light,dark
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
