import { Button, Typography } from '@mui/material';
import React from 'react'
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';
import ContentActionBanner from '../../components/common/content.action.banner/content.action.banner';
import FeaturesPanel from '../../components/common/features.panel/features.panel';
import './home.page.scss';
import Faqs from '../../components/common/faqs/faqs';
import SubscriptionCard from '../../components/common/subscription.card/subscription.card';
import { useNavigate } from 'react-router-dom';
import { IsMobileWidth } from '../../components/common/utill/utils';
import clsx from 'clsx'
const HomePage = () => {
    const mobileWidth = IsMobileWidth()
    let navigate = useNavigate();
    const redirectTo = (url) => {
        navigate(url);
    }
    const featuresData = [
        {
            label: 'Standard KRC20',
            description: `The Token will be fully compliant with the KRC20 definition and compatible with any KRC20 wallet all around theworld. 
            Token will have custom name and symbol and customizable decimals amount.
            Token Source Code will be automatically verified on Kaichain explorer.`
        },
        {
            label: 'Burnable',
            description: 'The Token can be burned. It means that you can choose to reduce the circulating supply by destroying some of your tokens.'
        },
        {
            label: 'Mintable',
            description: ` Owner or accounts with minting permission will be able to generate new
            tokens, up to token max supply. You can also disable minting if you
            don’t want to generate tokens anymore.`
        },
        {
            label: 'Deflationary',
            description: `Token supply will reduce over time. For each transaction a fee will be
            automatically burned. Owner can exclude some accounts from the
            deflation mechanism.`
        },
        {
            label: 'Taxable',
            description: `A tax fee will be added to transfers. For each transaction a fee will
            be automatically sent to a predefined address. Owner can exclude some
            accounts from the taxation mechanism. `
        },
        {
            label: 'Capped',
            description: `You won't be able to generate more tokens than the defined token cap.
            This ensure people that you will not generate more tokens than
            declared.`
        },
        {
            label: 'Pausable',
            description: `Token transfer can be paused. Useful to prevent trades until a period
            or freezing all token transfers.`
        },
        {
            label: 'Ownable Access',
            description: `Token will have an Owner. Token owner will be able to mint new tokens
            or to call the finish minting function.`
        },
        {
            label: 'Role Based Access',
            description: `Token will have Roles. You can add or remove ADMIN or MINTER role to
            addresses. Token will be Ownable too.`
        },
        {
            label: 'ERC1363 Token',
            description: `The ERC1363 Token is an extension of KRC20 that can make a
            callback on the receiver contract to notify token transfers or token
            approvals.`
        },
        {
            label: 'Token Recover',
            description: `There are lots of tokens lost forever into Smart Contracts. It allows
            the contract owner to recover any KRC20 token sent into
            your contract for error.`
        },
    ]
    return (
        <div id='home-page'>
            <BackgroundImageBanner
                image={`${process.env.PUBLIC_URL}/assets/images/logo-img-2.png`}
                title='KAICHAIN Token Generator'
                label='Create an KRC20 Token in less than a minute with Token Generator for Kaichain Network.'
                description='No login. No setup. No coding required.'
                footer={<div className='d-flex justify-content-center'>
                    {/* <Button onClick={() => redirectTo('/create-token')} variant='contained' color='secondary'
                        className={clsx(mobileWidth && 'pl-2 pr-2', !mobileWidth && 'pl-5 pr-5 pt-3 pb-3', 'text-transform-none text-white')}>
                        Create KRC20 Token
                    </Button> */}
                    <Button onClick={() => redirectTo('/create-token')} variant='outlined' color='secondary'
                        className={clsx(mobileWidth && 'pl-2 pr-2', !mobileWidth && 'pl-4 pr-4 pt-3 pb-3', 'ml-2 text-transform-none')}>
                        Create KRC20 Token
                    </Button>
                </div>}
            />
            <CircularImageCardPanel
                title='How it works'
                label='Create KRC20 Token in less than a minute.'
                description='Easily deploy Smart Contract for a Standard KRC20 Token.'
                title1='Install MetaMask'
                title2='Enter Details'
                title3='Deploy your Token'
                description1='You need to have installed with an amount of KEC to pay for contract deployment.'
                description2='Enter your preferred Token name and symbol. Choose your supply and Token type.'
                description3='Confirm your transaction using MetaMask. Once deployed your Token is ready to use.'
                image1={`${process.env.PUBLIC_URL}/assets/images/metamask logo.svg`}
                image2={`${process.env.PUBLIC_URL}/assets/images/detail-card.png`}
                image3={`${process.env.PUBLIC_URL}/assets/images/token-image.webp`}
            />
            <SubscriptionCard
                title='Pricing'
                label='Choose between 12 different Token types.'
                description='What are your Token requirements?'
                footer={<Typography variant='body1' color='secondary'>* GAS fee will be added to final amount</Typography>}
            />
            <ContentActionBanner
                label='Ready to deploy your KRC20 Token?'
                description='Try building your KRC20 Token in less than a minute. You can try on Test Network before to go live.'
                footer={
                    <Button onClick={() => redirectTo('/create-token')} variant='contained' color='secondary' className='pl-5 pr-5 pt-3 pb-3 text-white'>
                        Create KRC20 Token
                    </Button>
                }
            />
            <FeaturesPanel
                title='Features'
                label='You will be able to choose between several features.'
                description='What are your Token requirements?'
                data={featuresData}
                footer={<Typography className='pt-3 pb-3' variant='body1' color='secondary'>
                    Learn more in
                    <a className='pl-1 link-style' href='#faq'>
                        Frequently Asked Questions
                    </a>
                </Typography>}
            />
            <ContentActionBanner
                label='Need a custom development?'
                description='Open to getting in touch with awesome people and projects.'
                footer={
                    <Button variant='outlined' color='secondary' className='pl-5 pr-5 pt-3 pb-3'>
                        Let us know
                    </Button>
                }
            />
            <Faqs
                title='FAQ'
            />
            <ContentActionBanner
                hideBackgroundColor={true}
                label='Ready to deploy your KRC20 Token?'
                description='Try building your KRC20 Token in less than a minute. You can try on Test Network before to go live.'
                footer={
                    <Button onClick={() => redirectTo('/create-token')} variant='outlined' color='secondary' className='pl-5 pr-5 pt-3 pb-3'>
                        Create KRC20 Token
                    </Button>
                }
            />
        </div>
    )
}
export default HomePage