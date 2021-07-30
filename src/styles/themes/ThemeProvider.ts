import { MuiThemeProvider } from "@material-ui/core";
import React, { useState } from 'react';
import { getThemeByName } from 'styles/themes/base';

export const ThemeContext = React.createContext((themeName: string): void => {
});

type ThemeProviderProps = {
  theme: string
}

const ThemeProvider: React.FC = (props: ThemeProviderProps) => {
  const [themeName, _setThemeName] = useState(props.theme);

  const theme = getThemeByName(themeName);

  return (
    <ThemeContext.Provider value={ _setThemeName } >
      <MuiThemeProvider theme={theme}> { props.children } </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
