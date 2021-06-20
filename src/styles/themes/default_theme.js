import { createMuiTheme } from '@material-ui/core/styles';
import { COLOR_GRAY, COLOR_SECOND, COLOR_TEXT_DARK, COLOR_THEME, RADIUS, } from "styles/colors";

const default_theme = createMuiTheme({
  palette: {
    primary: {
      main: COLOR_THEME,
    },
    secondary: {
      main: COLOR_SECOND,
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Lato',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: RADIUS,
        padding: '5px 25px',
        boxShadow: 'none',
        '&.MuiButton-contained': {
          fontSize: 15,
          fontWeight: 700,
          textTransform: 'none',
          lineHeight: 1,
          color: 'white',
          '& .MuiButton-label': {
            color: 'white'
          },
          '& .MuiSvgIcon-root': {
            fill: 'white'
          }
        },
        '&.MuiButton-containedSizeLarge': {
          padding: '15px 35px'
        },
      },
      outlined: {
        '&.MuiButton-outlined': {
          fontSize: 14,
          fontWeight: 700,
          textTransform: 'lowercase',
          lineHeight: 1,
          background: 'white',
          color: COLOR_TEXT_DARK,
          margin: '15px 0'
        }
      }
    },
    MuiTabs: {
      root: {
        flexGrow: 1
      }
    },
    MuiTab: {
      root: {
        flexGrow: 1,
        maxWidth: 'none'
      }
    },
    MuiPaper: {
      root: {
        borderRadius: RADIUS
      },
      rounded: {
        borderRadius: RADIUS
      },
      elevation8: {
        boxShadow: 'rgb(0 0 0 / 15%) 2px 2px 10px'
      }
    },
    MuiFormControlLabel: {
      root: {
        alignItems: 'center',
        width: '100%',
        marginLeft: -5
      },
      label: {
        fontSize: 12
      }
    },
    MuiSvgIcon: {
      root: {
        color: COLOR_THEME
      }
    },
    MuiSelect: {
      select: {},
    },
    MuiPickersModal: {
      dialogRoot: {
        borderRadius: RADIUS
      }
    },
    MuiFilledInput: {
      root: {
        padding: 0
      }
    },
    MuiFormControl: {
      root: {
        width: '100%',
        margin: '10px 0'
      }
    },
    MuiCheckbox: {
      root: {}
    },
    MuiOutlinedInput: {
      root: {
        padding: 0,
        borderRadius: RADIUS
      }
    },
    MuiPagination: {
      root: {
        margin: '15px 0'
      },
      ul: {
        gap: 10
      }
    },
    MuiPaginationItem: {
      page: {
        background: 'white',
        margin: 0,
        '&.Mui-selected': {
          backgroundColor: COLOR_THEME
        }
      }
    },
    MuiInputAdornment: {
      root: {
        marginLeft: 10,
      },
      positionEnd: {
        '& .MuiTypography-root': {
          fontWeight: 700,
          color: 'black'
        },
        '& .Mui-disabled': {
          opacity: 0.5
        }
      },
      positionStart: {
        '& .MuiButtonBase-root': {
          padding: 0
        },
        '& .MuiSvgIcon-root': {
          fill: 'rgba(0, 0, 0, 0.54)'
        },
        '& svg': {
          fill: 'rgba(0, 0, 0, 0.54)'
        }
      }
    },
    MuiInputBase: {
      root: {
        padding: '10px 0',
        width: '100%'
      },
      input: {
        padding: 0,
        fontWeight: 600,
        fontSize: 15,
        fontFamily: 'inherit',
        color: 'white',
        margin: 0,
        '&[type=number]': {
          appearance: 'textfield',
        },
        '&::-webkit-outer-spin-button': {
          appearance: 'none',
          margin: 0,
        },
        '&::-webkit-inner-spin-button': {
          appearance: 'none',
          margin: 0,
        },
      },
      inputMultiline: {
        minHeight: 150
      }
    },
    MuiInput: {},
    MuiFormLabel: {
      root: {
        '&': {
          fontSize: 16,
          color: COLOR_GRAY,
        },
      },
    }
  },
});

export default default_theme;