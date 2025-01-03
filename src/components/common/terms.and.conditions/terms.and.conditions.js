import './terms.and.conditions.scss';
import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth, scrollToTop } from '../../../components/common/utill/utils';
import { useStyle } from './terms.and.conditions.style'
const TermsAndConditions = () => {
    const classes = useStyle()
    const tabletWidth = IsTabletWidth()
    const mobileWidth = IsMobileWidth()
    // const [state, setState] = useState({
    //     country: 'Pakistan'
    // })
    // const onChange = (name, value) => {
    //     setState({ ...state, [name]: value })
    // }
    useEffect(() => {
        document.getElementById('terms-and-conditions-dialog') &&
            document.getElementById('terms-and-conditions-dialog').addEventListener('touchmove', function (event) {
                event.stopPropagation();
            });
        scrollToTop()
    }, [])

    return (
        <div id='terms-and-conditions' className={clsx(!(mobileWidth || tabletWidth) && 'pt-2', 'pb-2', (tabletWidth || mobileWidth) && 'pt-2 pb-2')}>
            <Container id='terms-and-conditions-dialog' maxWidth='lg' className='content-style-1'>
                <div className='pt-1 pb-1 d-flex justify-content-between'>
                    <Typography className={clsx(classes.textStyle, 'd-flex align-items-center')}
                        variant={clsx(!(mobileWidth || tabletWidth) && 'h4', tabletWidth && 'h6', mobileWidth && 'subtitle20M6')}>
                        Token Generator Terms of Use
                    </Typography>
                </div>
                <div className='pt-3 pb-3 pl-3 pr-3 head1'>
                    <p>Token Generator and Kaichain are free of any liability regarding Tokens built using Token Generator, and the use that is made of them. Tokens built on Token Generator, their projects, their teams, their use of Token (as well as anything related to Token) are in no way connected to Token Generator and Kaichain.</p>
                    <p className='mt-3'>Token source code is provided under MIT License. Source code has been tested with 100% coverage and continuously updated to reduce risk of bugs and to introduce language optimizations. Anyway the purchase of tokens involves a high degree of risk. Before acquiring tokens, it is recommended to carefully weighs all the information and risks detailed in Token owner's Conditions.</p>
                </div>
                <div className="tab-pane mt-4" id="tab_default_5">
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h6', tabletWidth && 'h6', mobileWidth && 'subtitle20M6')}> #Notes</Typography>
                    <p className={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} >Token Generator is referred to in these Terms as the "App". Token Generator is referred to in these Terms as the "blockchain network"; The native coin of each network (KEC) are collectively referred to in these Terms as the "native currency";</p>
                </div>
                <div className="tab-pane mt-4" id="tab_default_5">
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h6', tabletWidth && 'h6', mobileWidth && 'subtitle20M6')}> #The App</Typography>
                    <p className={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} >Token Generator is a distributed application that runs on Kaichain network, using .Token Generator to enable users to build their KRC20 Tokens.</p>
                    <p className={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} >
                        To most easily use the App, you must first install a browser extension called MetaMask. MetaMask is an electronic wallet, which allows you to purchase, store, and engage in transactions using native currency on evm compatible blockchains. You will not be able to engage in any transactions on the App other than through MetaMask. Transactions that take place on the App are managed and confirmed via the blockchain. You understand that your public address will be made publicly visible whenever you engage in a transaction on the App. We neither own nor control MetaMask, the blockchain network, or any other third party site, product, or service that you might access, visit, or use for the purpose of enabling you to use the various features of the App. We will not be liable for the acts or omissions of any such third parties, nor will we be liable for any damage that you may suffer as a result of your transactions or any other interaction with any such third parties.
                    </p>
                </div>
                <div className="tab-pane mt-4" id="tab_default_5">
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h6', tabletWidth && 'h6', mobileWidth && 'subtitle20M6')}> #Fees and Payment</Typography>
                    <p className={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} >
                        If you elect to build a KRC20 Token on the App, or with or from other users via the App, any financial transactions that you engage in will be conducted solely through the blockchain network via MetaMask. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse or refund any transactions. With that in mind, we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in via the App, or using the Smart Contracts, or any other transactions that you conduct via the blockchain network or MetaMask. The blockchain network requires the payment of a transaction fee (a “Gas Fee”) for every transaction that occurs on the blockchain network. The Gas Fee funds the network of computers that run the decentralized blockchain network. This means that you will need to pay a Gas Fee for each transaction that occurs via the App. Gas Fee depends on Gas Limit and on current Gas price average. MetaMask will suggest both when you use the App. Do not decrease Gas Limit to avoid transaction to fail. If you want, you can decrease Gas Price but your transaction could remain pending for minutes/hours. Do not send the same transaction multiple times. Duplicate or failed transactions can't be refunded. In addition to the Gas Fee, each time you utilize a Smart Contract to conduct a transaction via the App, you authorize us to collect a commission of an amount of native currency of the total value of that transaction (each, a “Commission”). Commission will be publicly visible on the App confirmation page and in MetaMask confirmation popup. You acknowledge and agree that the Commission will be transferred directly to us through the blockchain network as part of your payment. We will not collect a Commission for interactions that do not involve our App.
                    </p>
                </div>
                <div className="tab-pane mt-4" id="tab_default_5">
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h6', tabletWidth && 'h6', mobileWidth && 'subtitle20M6')}> #Risks</Typography>
                    <p className={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} >
                        You agree that you are responsible for your own conduct while accessing or using the App, and for any consequences thereof. The prices of blockchain assets are extremely volatile. Fluctuations in the price of other digital assets could materially and adversely affect the value of your Token, which may also be subject to significant price volatility. You are solely responsible for determining what, if any, taxes apply to your token-related transactions. We are not responsible for determining the taxes that apply to your transactions on the App, the Site, or the Smart Contracts. The App does not store, send, or receive your Token. This is because your Token exists only by virtue of the ownership record maintained on the App’s supporting blockchain in the blockchain network. Any transfer of Token occurs within the supporting blockchain in the blockchain network, and not on the App. There are risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet. You accept and acknowledge that we will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the blockchain network, however caused. The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is uncertain, and new regulations or policies may materially adversely affect the development of the Tokens ecosystem, and therefore the potential utility or value of your Token. Upgrades by developers to the blockchain network, a hard fork in the blockchain network, or a change in how transactions are confirmed on the blockchain network may have unintended, adverse effects on all blockchains using the KRC20 standard.
                    </p>
                </div>
            </Container >
        </div >
    )
}
export default TermsAndConditions