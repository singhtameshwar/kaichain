import React from 'react';
import withStyles from '@mui/styles/withStyles';
import Dialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useStyle } from './content.dialog.style';

const styles = theme => ({
    root: {
        margin: 0,
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(2),
        width: '100%'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, setHeaderBackgroundAsPrimary, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6" className='w-100'>{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    // className={classes.closeButton}
                    onClick={onClose}
                    size="medium">
                    {setHeaderBackgroundAsPrimary ? <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/close-icon.svg`}
                        width='24px'
                        height='24px'
                    /> :
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icons/close.svg`}
                            width='24px'
                            height='24px'
                        />
                    }
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function ContentDialog(props) {
    const { open, title, disableBackdropClick, backDropColor, transparentDialog, fullScreen, classNames, anyContent, id, maxWidth, dividers, setHeaderBackgroundAsPrimary } = props; // anyContent is optional , use when need to do absolute something
    const classes = useStyle()
    return (
        <div className="position-relative">
            <Dialog
                BackdropProps={{ style: { backgroundColor: backDropColor ? backDropColor : '' } }}
                maxWidth={maxWidth}
                id={id}
                className={classNames}
                scroll="paper"
                PaperProps={{
                    sx: {
                        backgroundColor: transparentDialog ? "transparent !important" : '',
                        boxShadow: transparentDialog ? "none !important" : '',
                    }
                }}
                fullWidth={true}
                fullScreen={fullScreen}
                onClose={props.handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>
                {anyContent}
                <DialogTitle classes={{ root: setHeaderBackgroundAsPrimary ? classes.header : '' }} id="customized-dialog-title" onClose={props.handleClose} setHeaderBackgroundAsPrimary={setHeaderBackgroundAsPrimary}>
                    {title}
                </DialogTitle>
                <DialogContent dividers={dividers === false ? false : true}>
                    <Container id='content-dialog' maxWidth='xl' className='pl-0 pr-0 position-relative'>
                        {props.children}
                    </Container>
                </DialogContent>
                {
                    props.actions ?
                        <DialogActions>
                            {props.actions}
                        </DialogActions> : null
                }
            </Dialog>
        </div>
    );
}
