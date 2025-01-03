import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
    content: {
        padding: '56px 168px'
    },
    textStyle: {
        color: theme.palette.background.paper,
        fontWeight: '300 !important',
        fontFamily:'Roboto !important'
    },
    contentBannerStyle: {
        background: 'linear-gradient(0deg, #000, #060606)',
        animation: 'Gradient 15s ease',
    }
}))