import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
    paper: {
        background: theme.palette.secondary.main,
        height: '100vh'
    },
    paper2: {
        height: '100vh'
    },
    textcolor: {
        color: theme.palette.primary.dark
    },

}))