import { MuiThemeProvider } from "@material-ui/core";
import React, { useState } from 'react';
import { getThemeByName } from 'styles/themes/base';

export const ThemeContext = React.createContext((themeName: string): void => {
});

type ThemeProviderProps = {
  theme: string,
  children: any
}

const ThemeProvider/*: React.FC */= ({ theme, children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState(theme);

  const themeObject = getThemeByName(themeName);

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={themeObject}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
