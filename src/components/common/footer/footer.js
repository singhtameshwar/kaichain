import React, { useState } from 'react'
import clsx from 'clsx'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { useStyle } from './footer.style'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';

const Footer = (props) => {
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    const redirect = (url) => {
        props.push(url);
    }
    return (
        <Paper elevation={0} className={clsx(classes.footer, 'm-auto cursor-pointer')}>
            <Container maxWidth='lg' className='pt-5 pb-5'>
                <div className={clsx(!(mobileWidth || tabletWidth) && 'd-none', tabletWidth && 'd-flex justify-content-center pb-3', mobileWidth && 'd-flex justify-content-between pb-3')}>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/google-playstore-logo.svg`}
                            height='48px'
                            width='159.78px'
                        />
                    </div>
                    <div className='ml-2'>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/apple-store-logo.svg`}
                            height='48px'
                            width='144px'
                        />
                    </div>
                </div>
                <Grid container rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <div className={clsx(classes.gridStyle, 'd-flex flex-column pt-2 pl-5 pb-5')}>
                            <Typography color='secondary' className={clsx('mt-2')}
                                variant={clsx(!(mobileWidth || tabletWidth) && 'subtitle18M4', tabletWidth && 'subtitle12', mobileWidth && 'body18NL')}>
                                Token Generator
                            </Typography>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Create KRC20 on Kaichain
                            </Typography>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Create KRC20 on Polygon
                            </Typography>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Create BEP20 on BSC
                            </Typography>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Create KRC20 on Avalanche
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <div className={clsx(classes.gridStyle, 'd-flex flex-column pt-2 pl-5 pb-5')}>
                            <Typography color='secondary' className={clsx('mt-2')}
                                variant={clsx(!(mobileWidth || tabletWidth) && 'subtitle18M4', tabletWidth && 'subtitle12', mobileWidth && 'body18NL')}>
                                Token Watcher
                            </Typography>
                            <Typography onClick={() => redirect("/terms-and-conditions")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Create Token Page
                            </Typography>
                            <Typography color='secondary' className={clsx('mt-4')}
                                variant={clsx(!(mobileWidth || tabletWidth) && 'subtitle18M4', tabletWidth && 'subtitle12', mobileWidth && 'body18NL')}>
                                Utilities
                            </Typography>
                            <Typography onClick={() => redirect("/privacy-policy")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Create Address Page
                            </Typography>
                            <Typography onClick={() => redirect("/cookies-policy")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Coin History
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <div className={clsx(classes.gridStyle, 'd-flex flex-column pt-2 pl-5 pb-5')}>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Contact Us
                            </Typography>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Terms and conditions
                            </Typography>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'mt-4')} variant='subtitle14M6'>
                                Privacy Policy
                            </Typography>
                            <div className={clsx(!mobileWidth && 'd-flex', mobileWidth && 'd-flex justify-content-center pb-2 pt-3', 'mt-3')}>
                                <div>
                                    <a href='/' target='_blank'>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/facebook.png`}
                                            height='32px'
                                            width='32px'
                                        />
                                    </a>
                                </div>
                                <div className='ml-2'>
                                    <a href='/' target='_blank'>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/instagram.png`}
                                            height='32px'
                                            width='32px'
                                        />
                                    </a>
                                </div>
                                <div className='ml-2'>
                                    <a href='/' target='_blank'>
                                        <img
                                            src='https://icon-library.com/images/twitter-icon-white-transparent/twitter-icon-white-transparent-24.jpg'
                                            height='32px'
                                            width='32px'
                                        />
                                    </a>
                                </div>
                                <div className='ml-2'>
                                    <a href='/' target='_blank'>
                                        <img
                                            src='https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg'
                                            height='32px'
                                            width='32px'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div className={clsx(!mobileWidth && 'd-flex flex-row justify-content-between align-items-start mt-5', mobileWidth && 'd-block mt-4 text-center mb-4')}>
                    <div className='d-flex flex-column'>
                        <Typography className={clsx(classes.textStyle)} variant='body18NL'>
                            {`©${new Date().getFullYear()}. Kaichain. all rights reserved.`}
                        </Typography>
                    </div>
                </div>
            </Container>
        </Paper>
    )
}

export default Footer