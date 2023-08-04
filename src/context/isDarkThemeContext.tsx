import React, { createContext, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialThemeContext: ThemeContextType = {
  isDarkMode: false,
  setIsDarkMode: () => {
    return;
  },
};

export const ThemeModeContext = createContext(initialThemeContext);

type Props = {
  children: React.ReactNode;
};

export const ThemeModeProvider: React.FC<Props> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <ThemeModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};
