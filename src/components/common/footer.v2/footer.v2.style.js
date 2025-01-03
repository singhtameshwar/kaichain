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
        background: 'linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 100%)',
        height: "100%"
    }
}));