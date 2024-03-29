import { Theme } from "@material-ui/core";
import default_theme from "styles/themes/default_theme";

export function getThemeByName(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  default_theme
};