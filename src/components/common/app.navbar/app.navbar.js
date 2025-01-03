import React from "react";
import { useStyle } from "./app.navbar.style";
import { AppBar, Toolbar, Container, Button, IconButton, Typography, Drawer } from "@mui/material";
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import { Link } from 'react-scroll';
import DropDownMenu from "../dropdown.menu/dropdown.menu";

const AppNavbar = () => {
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    let location = useLocation();
    let navigate = useNavigate();
    const redirect = (url) => {
        navigate(url);
    }
    const [state, setState] = useState({
        isDrawerOpen: false
    })
    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }
    const showDrawer = () => {
        setState({ ...state, isDrawerOpen: true });
    };

    const hideDrawer = () => {
        setState({ ...state, isDrawerOpen: false });
    };
    const isToShowNavbarButtons = (location) => {
        if (location.pathname === '/login') {
            return false
        }
        else {
            return true
        }
    }
    const dropdownData = [
        {
            name: 'Kaichain Token Generator',
            items: {
                // label: 'Kaichain',
                // imageSrc: `${process.env.PUBLIC_URL}/assets/images/logo-img-1.png`,
                child: [
                    {
                        name: 'Create KRC20 on Kaichain',
                        path: '/create-token'
                    },
                    // {
                    //     name: 'Pricing',
                    //     path: '/'
                    // },
                    // {
                    //     name: 'Features',
                    //     path: '/'
                    // },
                    // {
                    //     name: 'Faqs',
                    //     path: '/'
                    // }

                ]
            }
        },
        // {
        //     name: 'Token Watcher',
        //     items: {
        //         label: 'Kaichain',
        //         imageSrc: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Kaichain-KEC-icon.png',
        //         child: [
        //             {
        //                 name: 'Create KRC20 on Kaichain',
        //                 path: '/create-token'
        //             },
        //             {
        //                 name: 'Pricing and Features',
        //                 path: '/create-token'
        //             }
        //         ]
        //     }
        // },
        // {
        //     name: 'Utilities',
        //     items:
        //     {
        //         label: 'Kaichain',
        //         imageSrc: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Kaichain-KEC-icon.png',
        //         child: [
        //             {
        //                 name: 'Create KRC20 on Kaichain',
        //                 path: '/create-token'
        //             },
        //             {
        //                 name: 'Pricing and Features',
        //                 path: '/create-token'
        //             }
        //         ]
        //     },
        //     // {
        //     //     label: 'Info',
        //     //     imageSrc: 'https://icon-library.com/images/info-icon-vector/info-icon-vector-13.jpg',
        //     //     child: []
        //     // },

        // }
    ]
    return (
        <div className="position-relative">
            {!(mobileWidth || tabletWidth) ?
                <AppBar position="relative" classes={{ root: classes.appNavbar }} className='m-auto paper-root'>
                    <Container maxWidth='xl' className='p-0'>
                        <Toolbar className={clsx(!mobileWidth && "d-flex flex-row align-items-center")}>
                            <div onClick={() => redirect('/')} className="cursor-pointer">
                                <img
                                    height='100%'
                                    width='60px'
                                    src={`${process.env.PUBLIC_URL}/assets/images/logo-img-1.png`}
                                ></img>
                            </div>
                            {dropdownData && dropdownData.map((data, index) => {
                                return <div key={index}>
                                    <DropDownMenu
                                        name={data.name}
                                        label={data.items && data.items.label}
                                        imageSrc={data.items && data.items.imageSrc}
                                        data={data.items && data.items.child}
                                    />
                                </div>
                            })}
                            <Button variant="none" className="text-transform-none ml-2">Pricing</Button>
                            <Button variant="none" className="text-transform-none ml-2">Features</Button>
                            <Button variant="none" className="text-transform-none ml-2">FAQS</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
                :
                <AppBar position="absolute" className={classes.responsiveAppNavbar}>
                    <Container maxWidth="lg" classes={{ root: classes.container }}>
                        <Toolbar className="d-flex flex-row justify-content-between align-items-center m-auto">
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { md: "flex" } }}>
                                <img
                                    height='100%'
                                    width='60px'
                                    src={`${process.env.PUBLIC_URL}/assets/images/logo-img-1.png`}
                                ></img>
                            </Typography>
                            {state.isDrawerOpen ?
                                <IconButton size="medium" onClick={hideDrawer} className='cursor-pointer'>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/close-icon.svg`}
                                        width='32px'
                                        height='32px'
                                        alt='close-icon'
                                    />
                                </IconButton>
                                :
                                <IconButton size="medium" onClick={showDrawer} >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/navbar-menu-icon.svg`}
                                        width='32px'
                                        height='32px'
                                        alt='menu'
                                    />
                                </IconButton>
                            }
                        </Toolbar>
                    </Container>
                </AppBar >
            }
            <Drawer
                id='sidebar'
                anchor='left'
                open={state.isDrawerOpen}
                onClose={hideDrawer}
                className={(classes.drawer)}
                classes={{
                    paper: mobileWidth ? classes.drawerPaper : classes.drawerOnTablet,
                }}
            >
                <Box
                    role="presentation"
                    className={clsx(tabletWidth ? classes.contentOnTablet : mobileWidth ? classes.contentOnMobile : classes.contentOnTablet)}
                >
                    <div className="d-flex flex-column justify-content-center align-items-start mt-2 mb-2">
                        {dropdownData && dropdownData.map((data, index) => {
                            return <div key={index}>
                                <DropDownMenu
                                    name={data.name}
                                    label={data.items && data.items.label}
                                    imageSrc={data.items && data.items.imageSrc}
                                    data={data.items && data.items.child}
                                />
                            </div>
                        })}
                    </div>
                </Box>
            </Drawer>
        </div >
    );
};
export default AppNavbar;