import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyle } from './content.action.banner.style'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';

const ContentActionBanner = (props) => {
    const { description, label, hideBackgroundColor, footer } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    return (
        <Box className={clsx(hideBackgroundColor ? '' : classes.contentBannerStyle, 'rounded-0')}>
            <Container maxWidth={clsx(!mobileWidth && 'md', mobileWidth && 'xl')}>
                <div className={clsx(!mobileWidth && 'pt-5 pb-5', mobileWidth && 'w-100 pt-4 pb-4 pl-2 pr-2',
                    'd-flex flex-row justify-content-between align-items-start m-auto')}>
                    <div className='w-100 m-auto text-center d-flex flex-column'>
                        < Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h5', (mobileWidth || tabletWidth) && 'subtitle20M6')} className={clsx(hideBackgroundColor ? 'text-dark' : classes.textStyle, 'pb-2')}>
                            {label ? label : ''}
                        </Typography>
                        <Typography variant='body3' className={clsx(hideBackgroundColor ? 'text-dark' : classes.textStyle, 'w-100 pt-3 pb-3')}>
                            {description ? description : ''}
                        </Typography>
                        {footer ?
                            <div className='mt-4'>
                                {footer}
                            </div> : null
                        }
                    </div>
                </div>
            </Container>
        </Box>
    )
}

export default ContentActionBanner