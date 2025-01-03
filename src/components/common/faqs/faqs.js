import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import clsx from 'clsx';
import { useStyle } from './faqs.style';
import BasicCard from '../../../components/common/basic.card/basic.card';
import ExpandableView from '../expandable.view/expandable.view';
import CircularImageCard from '../circular.image.card/circular.image.card';

const Faqs = (props) => {
    const { label, description, title, data, footer } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <div className={clsx(!(mobileWidth || tabletWidth) && 'pt-5 pb-5', (mobileWidth || tabletWidth) && 'pt-3 pb-3', classes.faq)}>
            <Container maxWidth={clsx(!mobileWidth && 'lg', mobileWidth && 'sm')}>
                <div className="pt-2 pb-2 text-center">
                    <Typography className={clsx(classes.textStyle, 'pt-2 pb-2')}
                        variant={clsx(!(mobileWidth || tabletWidth) && 'h5', tabletWidth && 'subtitle20M6', mobileWidth && 'subtitle')}>
                        {title ? title : ''}
                    </Typography>
                </div>
                <Grid container rowSpacing={2} spacing={5} className={clsx(!mobileWidth && 'mt-4 mb-4', mobileWidth && 'mt-2 mb-2')}>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-start'>
                        <BasicCard
                            bgColor='#ffff'
                            textColor='#000'
                            title='Token Generator'
                            description='Create an KRC20 Token in less than a minute with the most trusted Smart Contract Generator for Kaichain Network. No login. No setup. No coding required.'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-start'>
                        <BasicCard
                            bgColor='#ffff'
                            textColor='#000'
                            title='The KRC20 Standard'
                            description='KRC20 provides basic functionality to transfer tokens, as well as
                            allow tokens to be approved so they can be spent by another
                            on-chain third party.'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-start'>
                        <ExpandableView />
                    </ Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-start mt-5'>
                        <BasicCard
                            bgColor='#ffff'
                            textColor='#000'
                            title='DISCLAIMER'
                            label={`SmartContracts Tools and its company are free of any
                            liability regarding Tokens built using Token Generator, and the use
                            that is made of them. Tokens built on Token Generator, their
                            projects, their teams, their use of Token (as well as anything
                            related to Token) are in no way connected to SmartContracts Tools or
                            its company.`}
                            description={`Token source code is provided under MIT License. Source code has
                            been tested with 100% coverage and continuously updated to reduce
                            risk of bugs and to introduce language optimizations. Anyway the
                            purchase of tokens involves a high degree of risk. Before acquiring
                            tokens, it is recommended to carefully weight all the information
                            and risks detailed in Token owner's Conditions.`}
                        />
                    </Grid>
                </ Grid>
                <div className="pt-5 pb-4 text-center">
                    {footer ? footer : ''}
                </div>
            </Container>
        </div>
    )
}
export default Faqs