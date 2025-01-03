import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DropDownMenu(props) {
    const { name, imageSrc, label, data } = props
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const redirectTo = (url) => {
        navigate(url);
    }
    return (
        <div>
            <Button
                onClick={handleClick}
                variant='none'
                sx={{ color: '#fff' }}
            >
                {name}
                {open ?
                    <span className="material-icons">
                        arrow_drop_up
                    </span> :
                    <span className="material-icons">
                        arrow_drop_down
                    </span>
                }
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {label ?
                    <Typography className='d-flex justify-content-start align-items-center pl-3 pt-3 pb-3'>
                        {imageSrc ?
                            <ListItemIcon>
                                <img src={imageSrc} width='35px' alt='menu-items' />
                            </ListItemIcon>
                            : null}
                        {label ? label : null}
                    </Typography>
                    : null}
                {data && data.map((item, index) => {
                    return <MenuItem key={index} onClick={() => redirectTo(item?.path)} >
                        <ListItemText>{item?.name}</ListItemText>
                    </MenuItem>
                })}
                {data && data.length > 2 ? < Divider /> : null}
            </Menu>
        </div >
    );
}