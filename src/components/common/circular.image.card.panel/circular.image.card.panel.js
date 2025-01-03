import React from 'react'
import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import clsx from 'clsx';
import { useStyle } from './circular.image.card.panel.style';
import CircularImageCard from '../../../components/common/circular.image.card/circular.image.card';

const CircularImageCardPanel = (props) => {
    const { label, description, title, title1, title2, title3, image1, image2, image3, description1, description2, description3 } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <div className={clsx(!(mobileWidth || tabletWidth) && 'pt-5 pb-5', (mobileWidth || tabletWidth) && 'pt-3 pb-3')}>
            <Container maxWidth={clsx(!mobileWidth && 'lg', mobileWidth && 'sm')}>
                <div className="pt-2 pb-2 text-center">
                    <Typography className={clsx(classes.textStyle, 'pt-2 pb-2')}
                        variant={clsx(!(mobileWidth || tabletWidth) && 'h5', tabletWidth && 'subtitle20M6', mobileWidth && 'subtitle')}>
                        {title ? title : ''}
                    </Typography>
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body2')} className={clsx(classes.textStyle, 'mt-3 pt-2 text-transform-none')}>
                        {label ? label : ''}
                    </Typography>
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body2')} className={clsx(classes.textStyle, 'pt-2')}>
                        {description ? description : ''}
                    </Typography>
                </div>
                <Grid container rowSpacing={2} spacing={5} className={clsx(!mobileWidth && 'mt-4 mb-4', mobileWidth && 'mt-2 mb-2')}>
                    <Grid item xs={12} sm={12} md={12} lg={4} className='d-flex justify-content-start'>
                        <CircularImageCard
                            image={image1 ? image1 : ''}
                            title={title1 ? title1 : ''}
                            description={description1 ? description1 : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} className='d-flex justify-content-start'>
                        <CircularImageCard
                            image={image2 ? image2 : ''}
                            title={title2 ? title2 : ''}
                            description={description2 ? description2 : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} className='d-flex justify-content-start'>
                        <CircularImageCard
                            image={image3 ? image3 : ''}
                            title={title3 ? title3 : ''}
                            description={description3 ? description3 : ''}
                        />
                    </Grid>
                </ Grid>
                <div className="pt-5 pb-4 text-center">
                    <Button className='pt-3 pb-3 pl-5 pr-5' variant='outlined' color='secondary'>
                        Get started
                    </Button>
                </div>
            </Container>
        </div>
    )
}
export default CircularImageCardPanel