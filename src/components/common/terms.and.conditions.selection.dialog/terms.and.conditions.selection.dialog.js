import React, { useState } from 'react'
import ContentDialog from '../../../components/common/material.components/content.dialog/content.dialog';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import TermsAndConditions from '../../../components/common/terms.and.conditions/terms.and.conditions';
import { IsMobileWidth } from '../../../components/common/utill/utils'
import clsx from 'clsx';
import { useStyle } from './terms.and.conditions.selection.dialog.style';

const TermsAndConditionSelectionDialog = (props) => {
    const { isTermsAndConditionsAccepted } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const [state, setState] = useState({
        isTermsAndConditionSelectionDialogOpen: false
    })
    const hideTermsAndConditionSelectionDialog = () => {
        setState({ ...state, isTermsAndConditionSelectionDialogOpen: false })
    }
    const showTermsAndConditionSelectionDialog = () => {
        setState({ ...state, isTermsAndConditionSelectionDialogOpen: true })
    }

    return (
        <div id='term-and-condition-content'>
            <div style={{ background: '#f1efef' }} className='w-100 d-flex align-items-start pt-3 pb-3 pl-2'>
                <FormControlLabel
                    control={<Checkbox
                        checked={isTermsAndConditionsAccepted}
                        onChange={(e) => props.onChange('isTermsAndConditionsAccepted', e.target.checked)}
                        disableRipple={true}
                        classes={{ root: classes.radioBtn }}
                    />}
                    label={
                        <Typography color='primary' variant='caption' className={clsx(!mobileWidth && 'pl-1', mobileWidth && 'text-padding')}>
                            I have read, understood and agreed to Token Generator's <span onClick={showTermsAndConditionSelectionDialog} className={classes.linkStyle}> Terms of use</span>
                        </Typography>
                    }
                />
            </div>
            <ContentDialog
                open={state.isTermsAndConditionSelectionDialogOpen}
                maxWidth='md'
                handleClose={hideTermsAndConditionSelectionDialog}
                dividers={false}
            >
                <TermsAndConditions />
            </ContentDialog>
        </div>
    )
}

export default TermsAndConditionSelectionDialog