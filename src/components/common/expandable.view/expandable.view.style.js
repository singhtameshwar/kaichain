import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    accordion: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    accordionDetails: {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: 'none'
    }
}));
