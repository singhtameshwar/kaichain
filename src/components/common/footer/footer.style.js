import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    footer: {
        background: theme.palette.primary.main,
        height: 'auto',
        borderRadius: '0px',
        // maxWidth: '1440px'
    },
    textStyle: {
        color: theme.palette.background.paper,
    },
    gridStyle: {
        backgroundColor: '#181818',
        height: "100%"
    }
}));