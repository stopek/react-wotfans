import { createMuiTheme } from '@material-ui/core/styles';
import hexToRgbA from "helpers/hexToRgbA";
import {
  COLOR_DARK,
  COLOR_DARK_2,
  COLOR_SECOND,
  COLOR_TEXT,
  COLOR_TEXT_DARK,
  COLOR_THEME,
  RADIUS,
} from "styles/colors";

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
      label: {
        whiteSpace: 'nowrap'
      },
      containedPrimary: {
        '& svg': {
          fill: 'white'
        }
      },
      containedSizeSmall: {
        fontSize: 11
      },
      contained: {
        borderRadius: RADIUS,
        padding: '5px 25px',
        boxShadow: 'none',
        lineHeight: 1,
        '&.MuiButton-contained': {
          fontSize: 15,
          fontWeight: 700,
          textTransform: 'none',
          lineHeight: 1,
          color: 'white',
          '& .MuiButton-label': {
            color: 'white',
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
    // MuiCircularProgress: {
    //   svg: {
    //     width: 40,
    //     height: 40
    //   }
    // },
    MuiFab: {
      root: {
        width: 35,
        height: 35,
        minHeight: 35,
        borderRadius: RADIUS
      }
    },
    // MuiSpeedDialAction: {
    //   fab: {
    //     margin: '5px 0',
    //     '& svg': {
    //       fill: COLOR_THEME,
    //       width: '1em',
    //       height: '1em',
    //       fontSize: '1.5rem'
    //     }
    //   },
    //   staticTooltipClosed: {
    //     zIndex: -100
    //   },
    //   tooltipPlacementRight: {
    //     cursor: 'pointer'
    //   }
    // },
    // MuiSpeedDial: {
    //   fab: {
    //     '& .MuiSvgIcon-root': {
    //       fill: 'white'
    //     }
    //   },
    // },
    MuiTablePagination: {
      root: {
        color: COLOR_TEXT
      }
    },
    MuiTableContainer: {
      root: {
        background: COLOR_DARK,
      }
    },

    MuiTableRow: {
      root: {
        '&.MuiTableRow-hover:hover': {
          backgroundColor: COLOR_DARK_2
        }
      },
    },
    MuiTableCell: {
      sizeSmall: {
        padding: '5px 5px'
      },
      body: {
        color: COLOR_TEXT,
        borderBottom: `1px solid ${COLOR_DARK_2}`,
        lineHeight: 1,
        '& .MuiButtonBase-label': {
          whiteSpace: 'no-wrap'
        }
      },
      head: {
        whiteSpace: 'nowrap',
        borderBottom: 0,
        background: COLOR_THEME
      }
    },
    MuiTabs: {
      root: {
        background: COLOR_DARK_2,
        borderRadius: RADIUS,
        minHeight: 'auto',
      },
      indicator: {
        background: COLOR_THEME
      }
    },
    MuiDialogContent: {
      root: {
        padding: 10
      }
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: 'transparent'
      }
    },
    MuiBottomNavigationAction: {
      label: {
        color: COLOR_TEXT
      }
    },
    MuiTab: {
      root: {
        maxWidth: 'none',
        color: COLOR_TEXT,
      },
      wrapper: {
        color: COLOR_TEXT
      }
    },
    MuiPaper: {
      root: {
        borderRadius: RADIUS,
        '&#table-pepper': {
          background: COLOR_DARK_2,
          color: COLOR_TEXT,
          overflow: 'hidden'
        }
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
    MuiList: {
      root: {
        '& .MuiCheckbox-root': {
          padding: 0,
          marginRight: 5
        }
      }
    },
    MuiSelect: {
      select: {},
    },
    MuiButtonBase: {
      root: {
        '&.Mui-disabled': {
          opacity: 0.3
        },
      }
    },
    MuiPopover: {
      root: {
        '&#customized-menu': {
          '&.MuiPopover-root': {
            background: hexToRgbA(COLOR_DARK, 0.8)
          },
          '& .MuiPaper-root': {
            background: 'transparent',
            borderRadius: 0,
            '& .MuiButtonBase-root': {
              padding: '0',
              margin: '5px 0',
              background: 'transparent',
              '&:hover': {
                '& .MuiListItemIcon-root': {
                  background: COLOR_THEME,
                  '& svg': {
                    fill: 'white'
                  }
                },
                '& .MuiTypography-root': {
                  color: COLOR_THEME
                }
              },
              '& .MuiListItemIcon-root': {
                background: 'white',
                borderRadius: RADIUS,
                minWidth: 'auto',
                width: 35,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5,
                '& svg': {
                  width: 25,
                  height: 25,
                  fill: COLOR_THEME
                }
              },
              '& .MuiTypography-root': {
                color: COLOR_TEXT
              }
            }
          }
        }
      }
    },
    // MuiPickersModal: {
    //   dialogRoot: {
    //     borderRadius: RADIUS
    //   }
    // },
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
    // MuiPagination: {
    //   caption: {
    //     display: 'flex',
    //     flexWrap: 'no-wrap'
    //   },
    //   root: {
    //     margin: '15px 0'
    //   },
    //   ul: {
    //     gap: 10
    //   }
    // },
    // MuiPaginationItem: {
    //   root: {
    //     '&.MuiPaginationItem-ellipsis': {
    //       color: COLOR_TEXT
    //     }
    //   },
    //   page: {
    //     background: 'white',
    //     margin: 0,
    //     '&.Mui-selected': {
    //       backgroundColor: COLOR_THEME
    //     }
    //   }
    // },
    MuiTypography: {
      root: {
        color: COLOR_TEXT
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
          padding: '0 !important'
        },
        '& .MuiSvgIcon-root': {
          fill: 'white'
        },
        '& svg': {
          fill: 'white',
          padding: '0 !important'
        }
      }
    },
    MuiSlider: {
      root: {
        marginTop: 60,
        paddingTop: 2,
        paddingBottom: 2
      }
    },
    MuiInputBase: {
      root: {
        padding: '10px 0',
        width: 'inherit'
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
    MuiInput: {
      underline: {
        '&:before': {
          borderBottomColor: hexToRgbA(COLOR_THEME, 0.38),
          borderBottomWidth: 2
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&': {
          fontSize: 16,
          color: COLOR_TEXT,
        },
      },
    }
  },
});

export default default_theme;
