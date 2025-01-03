import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import clsx from 'clsx';
import { useStyle } from './subscription.card.style';
import BasicCard from '../../../components/common/basic.card/basic.card';
import Carousel from '../carousel/carousel';

const SubscriptionCard = (props) => {
    const { label, description, title, data, footer } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <div className={clsx(!(mobileWidth || tabletWidth) && 'pt-5 pb-5', (mobileWidth || tabletWidth) && 'pt-3 pb-3', classes.subscription)}>
            <Container maxWidth={clsx(!mobileWidth && 'lg', mobileWidth && 'sm')}>
                <div className="pt-2 pb-2 text-center">
                    <Typography className={clsx(classes.textStyle, 'pt-2 pb-2')}
                        variant={clsx(!(mobileWidth || tabletWidth) && 'h5', tabletWidth && 'subtitle20M6', mobileWidth && 'subtitle')}>
                        {title ? title : ''}
                    </Typography>
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} className={clsx(classes.textStyle, 'mt-3 pt-2 text-transform-none')}>
                        {label ? label : ''}
                    </Typography>
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body2')} className={clsx(classes.textStyle, 'pt-2')}>
                        {description ? description : ''}
                    </Typography>
                </div>
                {/* <Grid container rowSpacing={2} spacing={5} className={clsx(!mobileWidth && 'mt-4 mb-4', mobileWidth && 'mt-2 mb-2')}>
                    {data && data.map((data, index) => {
                        return <Grid key={index} item xs={12} sm={12} md={index == 0 ? 12 : 6} lg={index == 0 ? 12 : 6} className='d-flex justify-content-start'>
                            <BasicCard
                                title={data.label}
                                description={data.description}
                            />
                        </Grid>
                    })}
                </ Grid> */}
                <div id='pricing'>
                    <Carousel />
                </div>
                <div className="pt-5 pb-4 text-center">
                    {footer ? footer : ''}
                </div>
            </Container>
        </div>
    )
}
export default SubscriptionCard