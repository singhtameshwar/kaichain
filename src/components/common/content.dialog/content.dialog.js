import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContentDialog(props) {
    const { isDialogOpen, title, actions, content, maxWidth } = props

    return (
        <div>
            <Dialog
                open={isDialogOpen}
                onClose={props.hideDialog}
                maxWidth={maxWidth ? maxWidth : 'sm'}
                className='w-100'
                fullWidth={true}
            >
                {title ?
                    <DialogTitle id="alert-dialog-title">
                        {title}
                    </DialogTitle>
                    : null}
                {content ?
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {content}
                        </DialogContentText>
                    </DialogContent>
                    : null}
                {actions ?
                    <DialogActions>
                        {actions}
                    </DialogActions>
                    : null}
            </Dialog>
        </div>
    );
}
