import './background.image.banner.scss';
import React from 'react';
import { CardMedia, Container, Paper, Typography } from '@mui/material';
import { useStyle } from './background.image.banner.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';

const BackgroundImageBanner = (props) => {
    const { image, title, description, footer, label } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <Paper id='background-image-banner' elevation={0}
            className={(clsx(!(mobileWidth || tabletWidth) && classes.header, tabletWidth && classes.headerOnTablet, mobileWidth && classes.responsiveHeader, 'position-relative w-100'))}>
            <div className={clsx('d-flex w-100 h-100')}>
                <div className='content position-absolute d-flex flex-column h-100 w-100 justify-content-center align-items-center text-center'>
                    <Container maxWidth='lg'>
                        {image ? <div className='mb-2'>
                            <img
                                src={image}
                                // height='100px'
                                width='300px'
                            />
                        </div> : null
                        }
                        <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h3', tabletWidth && 'h5', mobileWidth && 'h6')} className={clsx(classes.textStyle, 'text-transform-none')}>
                            {title ? title : ''}
                        </Typography>
                        <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} className={clsx(classes.textStyle, 'pt-2 text-transform-none')}>
                            {label ? label : ''}
                        </Typography>
                        <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} className={clsx(classes.textStyle)}>
                            {description ? description : ''}
                        </Typography>
                        {footer ?
                            <Typography className={clsx('mt-5')}>
                                {footer}
                            </Typography> : null
                        }
                    </Container>
                </div>
            </div>
        </Paper >
    )
}

export default BackgroundImageBanner