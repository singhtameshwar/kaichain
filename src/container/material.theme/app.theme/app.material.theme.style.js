import { primaryColor } from "./app.material.theme.base";
import RubikFont from '../fonts/Rubik/static/Rubik-Regular.ttf';
export const gradientColor = "linear-gradient(-180deg,#239aad,#29b2c8)";

const rubik = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Rubik'),
    local('Rubik-Regular'),
    url(${RubikFont}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
export const themeStyles = {
  MuiPaper: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiAppBar: {
    styleOverrides: {
      root: {}
    },
    defaultProps: {}
  },
  MuiBackdrop: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiAvatar: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiBadge: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiBottomNavigation: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiBottomNavigationAction: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiBreadcrumbs: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiButton: {
    styleOverrides: {
      root: {
        outline: 'none !important'
      }
    },
    defaultProps: {
      color: "primary",
      variant: "contained"
    },
  },
  MuiButtonBase: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiButtonGroup: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCard: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCardActionArea: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCardActions: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCardContent: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCardHeader: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCardMedia: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCheckbox: {
    styleOverrides: {},
    defaultProps: {
      color: "primary"
    }
  },
  MuiChip: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCircularProgress: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiCollapse: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiContainer: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiDialog: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiDialogActions: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiDialogContent: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiDialogContentText: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiDialogTitle: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiDivider: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiDrawer: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiExpansionPanel: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiExpansionPanelActions: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiExpansionPanelDetails: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiExpansionPanelSummary: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiFab: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiFilledInput: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiFormControl: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiIcon: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiFormControlLabel: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiFormGroup: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiFormHelperText: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiFormLabel: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
          borderRight: '5px solid red !important',
        },
      },
      columnHeaderWrapper: {
        backgroundColor: 'red',
      },
    },
    defaultProps: {}
  },
  MuiGridList: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiGridListTile: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiGridListTileBar: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        outline: 'none !important'
      }
    },
    defaultProps: {}
  },
  MuiInput: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiInputAdornment: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiInputBase: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiInputLabel: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiLinearProgress: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiLink: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiList: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiListItem: {
    styleOverrides: {
      button: {
        color: 'rgba(28, 48, 74, 0.5)',
        height: '35px !important',
        borderLeft: '4px solid transparent !important',
        borderRadius: '0px 5px 5px 0px',
        '&:hover': {
          borderLeft: '4px solid #FFA33C !important',
          borderRadius: '0px 5px 5px 0px',
          backgroundColor: '#f8f8f8', // THEME_CHANGES  backgroundColor: '#f8e1f1',
          color: 'rgba(28, 48, 74, 0.5)',
          "&& i": {
            fontSize: "16px",
            background: 'rgba(28, 48, 74, 0.5)',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }
        }
      },
      root: {
        '&.Mui-selected': {
          backgroundColor: 'transparent !important',//    backgroundColor: '#ffe0f5' THEME_CHANGES
          color: '#FFA33C',
          borderLeft: '4px solid #FFA33C !important',
          borderRadius: '0px 5px 5px 0px',
          "&& i": {
            fontSize: "16px",
            background: '#FFA33C',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }
        },
        '&.Mui-selected:hover': {
          borderLeft: '4px solid #FFA33C !important',
          borderRadius: '0px 5px 5px 0px',
          backgroundColor: '#f8f8f8',//     backgroundColor: '#f8e1f1' THEME_CHANGES
          color: '#FFA33C',
          "&& i": {
            fontSize: "16px",
            background: '#FFA33C',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }
        }
      }
    }
  },
  MuiListItemAvatar: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '40px !important',
        "&& i": {
          fontSize: "16px",
          background: 'rgba(28, 48, 74, 0.5)',
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }
      }
    },
    defaultProps: {}
  },
  MuiListItemSecondaryAction: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiListItemText: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiListSubheader: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiMenu: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiMenuItem: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiMobileStepper: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiNativeSelect: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiOutlinedInput: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiPopover: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiRadio: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiSelect: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiSlider: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiSnackbar: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiSnackbarContent: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiStep: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiStepButton: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiStepConnector: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiStepContent: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiStepIcon: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiStepLabel: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiStepper: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiSvgIcon: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiSwitch: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTab: {
    styleOverrides: {
      root: {
        outline: 'none !important'
      }
    },
    defaultProps: {}
  },
  MuiTable: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTableBody: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: '#ffffff'
      },
      root: {
        verticalAlign: "top"
      }
    },
    defaultProps: {}
  },
  MuiTableFooter: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: primaryColor
      }
    },
    defaultProps: {}
  },
  MuiTablePagination: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTableRow: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTableSortLabel: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTabs: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTextField: {
    styleOverrides: {},
    defaultProps: {
      variant: "outlined",
      fullWidth: true
    }
  },
  MuiToolbar: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTooltip: {
    styleOverrides: {
      tooltipPlacementTop: {
        color: '#fff',
        backgroundColor: primaryColor,
      },
      tooltipPlacementBottom: {
        color: '#fff',
        backgroundColor: primaryColor,
      },
      tooltipPlacementLeft: {
        color: '#fff',
        backgroundColor: primaryColor,
      },
      tooltipPlacementRight: {
        color: '#fff',
        backgroundColor: primaryColor,
      },
    },
    defaultProps: {}
  },
  MuiTouchRipple: {
    styleOverrides: {},
    defaultProps: {}
  },
  MuiTypography: {
    styleOverrides: {},
    defaultProps: {
      // color: "primary",
      component: 'div'
    }
  },
  MuiCssBaseline: {
    styleOverrides: {
      // '@global': {  //TO_CHANGE FONTFAMILY
      '@font-face': [rubik],
      '*::-webkit-scrollbar': {
        width: '0.8em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
      // },
    },
    defaultProps: {}
  }
}
