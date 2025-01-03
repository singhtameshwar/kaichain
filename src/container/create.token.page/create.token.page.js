import React from 'react'
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner'
import CreateTokenForm from '../../components/common/create.token.form/create.token.form'

const CreateTokenPage = () => {
    return (
        <div>
            <BackgroundImageBanner
                image={`${process.env.PUBLIC_URL}/assets/images/logo-img-2.png`}
                title='KAICHAIN Token Generator'
                label='Create an KRC20 Token in less than a minute with the most trusted Smart Contract Generator for Kaichain Network.'
                description='No login. No setup. No coding required.'
            />
            <CreateTokenForm
                title='Token Details'
                description='Enter token details and choose a network'
            />
        </div>
    )
}

export default CreateTokenPage