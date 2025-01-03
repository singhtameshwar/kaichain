import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    textStyle: {
        color: theme.palette.secondary.main,
    },
    subscription: {
        borderTop: `1px solid ${theme.palette.secondary.main}`,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        background: 'linear-gradient(0deg, #000, #060606)',
        animation: 'Gradient 15s ease',
    },
}));
