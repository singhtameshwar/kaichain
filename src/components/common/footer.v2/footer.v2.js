import React, { useState } from 'react'
import clsx from 'clsx'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { useStyle } from './footer.v2.style'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';

const FooterV2 = (props) => {
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    const redirect = (url) => {
        props.push(url);
    }
    return (
        <Paper elevation={0} className={clsx(classes.footer, 'm-auto cursor-pointer')}>
            <Container maxWidth='lg' className='pt-5 pb-5'>
                <Grid container rowSpacing={1} className={classes.gridStyle}>
                    <Grid item xs={12} sm={12} md={6} lg={7} >
                        <div className={clsx('d-flex flex-column pt-2 pl-5 pb-5')}>
                            <Typography color='secondary' className={clsx('pt-2')}
                                variant={clsx(!(mobileWidth || tabletWidth) && 'h6', tabletWidth && 'h6', mobileWidth && 'body18NL')}>
                                GET CONNECTED
                            </Typography>
                            <Typography className={clsx(classes.textStyle, 'pb-2')} variant='h5'>
                                Connect to Kai Chain Community
                            </Typography>
                            <Typography className={clsx(classes.textStyle, 'pt-2 pb-2')} variant='body2'>
                                Join the discussions and stay up to date with the
                                latest news and announcements.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <div className={clsx('d-flex flex-column pt-2 pl-5 pb-5 pr-5 h-100')}>
                            <div className={clsx(!(mobileWidth || tabletWidth) && 'd-flex justify-content-end align-items-end', (mobileWidth || tabletWidth) && 'd-flex justify-content-center align-items-center pb-2 pt-3', 'mt-3 h-100')}>
                                <div>
                                    <a href='/' target='_blank'>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/facebook.svg`}
                                        // height='32px'
                                        // width='32px'
                                        />
                                    </a>
                                </div>
                                <div className='ml-2'>
                                    <a href='/' target='_blank'>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/twitter-icon.svg`}
                                        // height='32px'
                                        // width='32px'
                                        />
                                    </a>
                                </div>
                                <div className='ml-2'>
                                    <a href='/' target='_blank'>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/telegram.svg`}
                                        // height='32px'
                                        // width='32px'
                                        />
                                    </a>
                                </div>
                                <div className='ml-2'>
                                    <a href='/' target='_blank'>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/github.svg`}
                                        // height='32px'
                                        // width='32px'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default FooterV2