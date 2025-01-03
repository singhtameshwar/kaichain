import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { Badge, Typography } from '@mui/material';

export default function SwitchButton(props) {
    const { topAdornment, error, message, showSteric, label, value, onChange, disabled } = props
    return (
        <FormControl component="fieldset">
            <div className="d-flex w-100 justify-content-between label">
                {topAdornment ? (
                    <Badge badgeContent={showSteric ? <Typography variant='h6' className='d-flex align-items-center text-danger pt-1 pl-2'>*</Typography> : 0} >
                        <Typography color='primary' variant="body2" className="max-width-content">
                            <label htmlFor="text-field">
                                {topAdornment}
                            </label>
                        </Typography>
                    </Badge>
                ) : (
                    ""
                )}
                {error ? <Typography variant="caption" className="text-danger text-right">{error}</Typography> : null}
            </div>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={value} disabled={disabled} onChange={onChange} name="gilad" />}
                    label={label ? label : ''}
                />
            </FormGroup>
            {message ? <Typography variant="caption" className="text-muted text-left">{message}</Typography> : null}
        </FormControl>
    );
}
