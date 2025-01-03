// import MuiDialogContent from '@mui/material/DialogContent';
// import MuiDialogActions from '@mui/material/DialogActions';
import { makeStyles } from '@mui/styles';

// export const DialogContent = withStyles(theme => ({
//     root: {
//         padding: theme.spacing(2)
//     }
// }))(MuiDialogContent);

// export const DialogActions = withStyles(theme => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing(1)
//     }
// }))(MuiDialogActions);
export const useStyle = makeStyles(theme => ({
    // root: {
    //     margin: 0,
    //     padding: theme.spacing(2),
    // },
    // closeButton: {
    //     position: 'absolute',
    //     right: theme.spacing(1),
    //     top: theme.spacing(1),
    //     color: theme.palette.grey[500]
    // },
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.paper
    }
}))