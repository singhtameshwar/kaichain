import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './material.select.dropdown.scss';
import { Badge, Typography } from '@mui/material';

const MaterialSelectDropdown = (props) => {
    const { data, value, onChange, topAdornment, error, message, showSteric } = props
    return (
        <div id='material-select-dropdown' className='w-100'>
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
            <FormControl className='w-100'>
                <Select
                    className='select-style w-100'
                    value={value}
                    onChange={onChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {data && data.map((data, i) => {
                        return <MenuItem className='menu-item-style' key={data.value} value={data.value}>{data.name}</MenuItem>
                    })
                    }
                </Select>
            </FormControl>
            {message ? <Typography variant="caption" className="text-muted text-left">{message}</Typography> : null}
        </div>
    )
}

export default MaterialSelectDropdown