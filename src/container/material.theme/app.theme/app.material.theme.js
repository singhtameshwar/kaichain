import { createTheme } from '@mui/material/styles';
import { themeStyles } from './app.material.theme.style'
import { materialThemeBase } from './app.material.theme.base';

export const appTheme = createTheme(({
  ...materialThemeBase,
  components: {
    ...themeStyles
  }
}));
/**   palette is used to change color of default theme such as primary , secondary , danger example given below

//example by using color object from material ui//


import blue from '@mui/material/colors/blue'
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

//example by using color directly//


import { createMuiTheme } from '@mui/material/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

to get custom color material ui provided the tool
https://material-ui.com/customization/color/#color-tool

**/


/**
  example to override typography
  change fontsize and fontstyle
  const theme = createMuiTheme({
     typography : {
        fontFamily:"cursive",
        fontSize:20,
     }
  },
});

*/

/**

example to override spacing

spacing is used to change spacing between default element default spacing is 2

import { createMuiTheme } from '@mui/material/styles';

export const theme = createMuiTheme({
    spacing:8,
});

*/
