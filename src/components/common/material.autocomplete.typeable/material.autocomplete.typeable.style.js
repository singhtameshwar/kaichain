import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  label: {
    display: "block",
  },
  input: {
    width: "100%",
    position: "relative",
    fontSize: '15px !important',
    fontWeight: 400,
    fontFamily: 'Nunito',
  },
  borderRadiusFull: {
    //borderRadius: '20px 20px 20px 20px'
  },
  borderRadiusPartial: {
    //borderRadius: '20px 20px 0px 0px'
  },
  paperRoot: {
    width: '100%',
    position: "relative",
    // boxShadow: '0px 4px 6px -2px rgb(90 85 85 / 20%)',
    minHeight: '45px',
    borderRadius: '5px',
    position: "relative",
    boxShadow: 'none',
    outline: 'none',
    background: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ECE9F1'
  },
  listItem: {
    paddingTop: '9px',
    paddingBottom: '9px',
    paddingRight: '9px',
    paddingLeft: '12px',
    fontSize: '12px !important',
    fontWeight: 400,
    color: '#000',
    cursor: 'pointer',
    // '&:hover': {
    //   background: theme.palette.primary.light,
    //   color: theme.palette.background.paper
    // }
  },
  listbox: {
    margin: "auto",
    zIndex: 5000,
    top: "7vh",
    paddingLeft: "0px",
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    maxHeight: 250,
    border: `1px solid rgba(28, 52, 84, 0.26) !important`,
    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.2)',
    '& li[data-focus="true"]': {
      // backgroundColor: theme.palette.primary.light,
      //backgroundColor: '#0026b3',// '#4a8df6',
      // color: "#ffffff",

      cursor: "pointer",
    },
    "& li:active": {
      // backgroundColor: theme.palette.primary.light,
      //backgroundColor: "#0026b3", // theme.palette.secondary.main,
      //color: theme.palette.background.paper
    },
  },
  selectedListItem: {
    // backgroundColor: theme.palette.primary.light,
    // color: "white",
  },
  secondaryBackground: {
    background: theme.palette.secondary.main,
    color: "#ffffff",
    fontWeight: "bolder",
  },
  selectedList: {
    // backgroundColor: theme.palette.primary.light,
    // color: "#ffffff"
  },
  optionsStyle: {
    fontSize: '14px !important',
    fontWeight: 400,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    lineHeight: '21px',
    display: 'flex',
    alignItems: 'center'
  },
  dropDownStyle: {
    height: '45px',
    border: `1px solid rgba(28, 52, 84, 0.26) !important`,
    borderRadius: '5px',
    position: "relative",
    boxShadow: 'none',
    outline: 'none',
    background: theme.palette.background.paper,
    border: '1px solid #dedede',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto',
  },
textColor: {
  color: theme.palette.dark.main,
  }
}));
