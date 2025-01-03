import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyle } from './expandable.view.style';
import { useState } from 'react';

export default function ExpandableView(props) {
    const classes = useStyle()
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const faqsData = [
        {
            name: 'Token Features',
            faqs: [
                {
                    question: `What's the difference between 10k, Fixed, Capped and Unlimited Supply?`,
                    answer: [
                        {
                            title: '10k',
                            description: `Token supply will be 10.000. The entire token supply will be
                        generated during deploy and sent to Token Owner wallet. You
                        can't increase or reduce supply later.`
                        },
                        {
                            title: `Fixed Supply`,
                            description: `
                        The entire token supply will be generated during deploy and
                        sent to Token Owner wallet. You can't increase or reduce
                        supply later.`
                        },
                        {
                            title: `Capped Supply`,
                            description: `You can define an initial supply to sent to Token Owner's
                        wallet. You can increase or reduce supply later by minting
                        or burning tokens (if allowed). You won't be able to
                        generate more tokens than the defined supply cap.`
                        },
                        {
                            title: `Unlimited Supply`,
                            description: `You can define an initial supply to sent to Token Owner's
                        wallet. You can increase or reduce supply later by minting
                        or burning tokens (if allowed). You will be able to generate
                        unlimited tokens without an upper limit.`
                        },

                    ]
                },
                {
                    question: `What's the difference between Unstoppable or Pausable Transfer?`,
                    answer: [
                        {
                            title: 'Unstoppable',
                            description: `Everyone can always transfer his own tokens. Transfer can't be stopped.`
                        },
                        {
                            title: `Pausable`,
                            description: `Token owner can stop token transfers. Useful for scenarios
                            such as preventing trades until the end of an evaluation
                            period, or having an emergency switch for freezing all token
                            transfers in the event of a large bug.`
                        }
                    ]
                },
                {
                    question: `What's the difference between None, Ownable and Role Based Access?`,
                    answer: [
                        {
                            title: 'None',
                            description: `Token doesn't need an access type because of there are not
                            actions that needs privileges.`
                        },
                        {
                            title: `Ownable`,
                            description: `Token will have an Owner. The account you use to deploy the
                            Token will be owner by default and will be able to mint new
                            tokens or call the finish minting function or set the burn
                            fee. You can transfer token ownership to addresses or Smart
                            Contract.`
                        },
                        {
                            title: `Role based`,
                            description: `Token will have Roles. Accounts with "MINTER" role will be
                            able to mint new tokens. Accounts with "ADMIN" role will be
                            able to add or remove roles to minters or other admins. The
                            account you use to deploy the Token will be ADMIN and MINTER
                            by default. In addition the Token will have the Ownable
                            behaviour too.`
                        }
                    ]
                },
                {
                    question: `Who can mint or burn tokens?`,
                    answer: [
                        {
                            title: 'Mint',
                            description: `It depends on Token Access Type. If you choose Ownable
                            Access only Token Owner will be able to mint new tokens. If
                            you choose Role Based Access only addresses with MINTER role
                            will be able to mint new tokens. In both cases, if you
                            choose a Capped supply no one won't be able to mint more
                            tokens than the defined cap. By choosing Unlimited supply
                            instead, you will be able to generate unlimited tokens.`
                        },
                        {
                            title: `Burn`,
                            description: `Everyone will be able to burn tokens he held. A third party
                            can burn tokens from other addresses only after an approval.
                            Nobody, not even the Token Owner, will be able to burn
                            tokens from other addresses without approval.
                          `
                        }
                    ]
                },
                {
                    question: `Who can pause transfers? `,
                    answer: [
                        {
                            title: '',
                            description: `If you choose a Pausable token, only token owner will be
                            able to pause and unpause token transfers.`
                        }
                    ]
                },
                {
                    question: ` What is a deflationary token? `,
                    answer: [
                        {
                            title: '',
                            description: `A deflationary token reduces its supply over time, resulting
                            in a limited amount of the currency in circulation and
                            ultimately increasing its value. This reduction of supply
                            happens through transaction fee. For each transaction a fee
                            will be automatically burned. owner can change the burn fee
                            and exclude some accounts from the deflation mechanism.`
                        }
                    ]
                },
                {
                    question: `What is a taxable token?`,
                    answer: [
                        {
                            title: '',
                            description: `
                            A taxable token takes a fee for each transaction and sends
                            it to a defined wallet. The owner can change the tax fee and
                            exclude some accounts from the taxation mechanism.
                          `
                        }
                    ]
                },
                {
                    question: ` What is ERC1363 Token? `,
                    answer: [
                        {
                            title: `There is no way to execute any code on a receiver or
                            spender contract after a KRC20 transfer,
                            transferFrom or approve so, to make an action, it is
                            required to send another transaction.
                            
                    This introduces complexity on UI development and friction
                    on adoption because users must wait for the first
                    transaction to be executed and then send the second one.
                    They must also pay GAS twice.

                    

                    ERC1363 aims to make tokens capable of performing actions
                    more easily and working without the use of any other
                    listener. It allows to make a callback on a receiver or
                    spender contract, after a transfer or an approval, in a
                    single transaction.
                            `,
                            description: `There are many proposed uses of Smart Contracts that can
                            accept KRC20 callbacks. Examples could be
                            
                            to create a token payable crowdsale
                            selling services for tokens
                            paying invoices
                            making subscriptions

                    For these reasons it was originally named "Payable
                    Token".

                    
                    Anyway you can use it for specific utilities or for any
                    other purposes who require the execution of a callback
                    after a transfer or approval received.
                  
                            
                            `
                        }
                    ]
                },
                {
                    question: ` What is Token Recover? `,
                    answer: [
                        {
                            title: '',
                            description: `There are lots of tokens lost forever into Smart Contracts.
                            Each Kaichain contract is a potential token trap for
                            KRC20 tokens. They can't be recovered so it means
                            money losses for end users.`
                        }
                    ]
                },
                {
                    question: `Will be having KRC20 Generator Copyright an issue? `,
                    answer: [
                        {
                            title: '',
                            description: `No. Token Generator code is released under MIT License so,
                            using HelloKRC20 for FREE or SimpleKRC20, the token will have a view method in Smart Contract ABIs
                            named "generator" showing a link to this page. Token will
                            also have a disclaimer in source code. It is not an issue
                            because of the Token will be fully compliant with
                            KRC20 definition. Token can be used in Exchanges,
                         or any KRC20 compatible
                            wallet, etc. this can be removed by choosing a token type
                            with remove Copyright feature.
                          `
                        }
                    ]
                },
            ]
        },

        {
            name: 'Token Behaviours',
            faqs: [
                {
                    question: `Where is my Token address? `,
                    answer: [
                        {
                            title: '',
                            description: `
                            Once the deploy transaction is sent, you will receive
                            transaction hash (first) and Token address (when transaction
                            is confirmed). If the transaction will take some time to be
                            confirmed due to network status, you can monitor it on
                            explorer and Token address will be visible in transaction
                            page.
                          `
                        }
                    ]
                },
                {
                    question: ` Who will be Token Owner? `,
                    answer: [
                        {
                            title: '',
                            description: `Once the Token will be deployed you (your MetaMask address)
                            will be the only owner.`
                        }
                    ]
                },
                {
                    question: `Where will token supply go after deploy?`,
                    answer: [
                        {
                            title: '',
                            description: `
                            The initial token supply will be held by the address used to
                            deploy the token (your MetaMask address). This address will
                            be Token Owner and will be able to generate new tokens (in
                            case you selected a token type with Mintable behaviour).
                          `
                        }
                    ]
                },
                {
                    question: `
                    Which wallet will the Token be supported by?
                  `,
                    answer: [
                        {
                            title: '',
                            description: `
                            The Token will be a fully KRC20 compatible token.
                            Any KRC20 wallet will support the Token.
                          `
                        }
                    ]
                },
                {
                    question: ` How to mint new tokens? `,
                    answer: [
                        {
                            title: '',
                            description: `
                            To generate new tokens you must use the "mint" function
                            using token owner wallet or a permissioned account wallet.
                            You can do this by using the Contract/Write tab on 
                            explorer.kaichain.net. You can also import ABI from the
                            Docs page in tools like MyEtherWallet and call the mint
                            function.`
                        }
                    ]
                },
                {
                    question: ` What is a deflationary token? `,
                    answer: [
                        {
                            title: '',
                            description: `A deflationary token reduces its supply over time, resulting
                            in a limited amount of the currency in circulation and
                            ultimately increasing its value. This reduction of supply
                            happens through transaction fee. For each transaction a fee
                            will be automatically burned. owner can change the burn fee
                            and exclude some accounts from the deflation mechanism.`
                        }
                    ]
                },
                {
                    question: `
                    Can I use the token in Exchanges or with DeFi protocols?
                  `,
                    answer: [
                        {
                            title: '',
                            description: `
                           
                  Yes, you can use the Token in Exchanges, Dex, or DeFi
                  protocols. It is a KRC20 compliant
                  so you can use for any purpose where
                  KRC20 applies.
                
                          `
                        }
                    ]
                },
                {
                    question: ` Can I use my Token for ICO? `,
                    answer: [
                        {
                            title: ``,
                            description: `
                            Yes, you can use Token for ICO or Crowdsales.
                  Note: you need to develop an ICO or Crowdsale Smart
                  Contract; Token address can't receive KEC.
                            `
                        }
                    ]
                },
                {
                    question: ` 
                    Can my Token receive KEC?
                   `,
                    answer: [
                        {
                            title: '',
                            description: `
                            No, Token address can't receive KEC. If you
                            want to create ICO, you need to develop a Smart Contract
                            able to do that.
                          `
                        }
                    ]
                },
                {
                    question: `
                    Will my Token Source Code be verified?
                  `,
                    answer: [
                        {
                            title: '',
                            description: `Yes, Token source code will be already verified on
                            explorer.kaichain.net. `
                        }
                    ]
                },
                {
                    question: `
                    Can I add logo and information to my token on Etherscan?
                  `,
                    answer: [
                        {
                            title: '',
                            description: `Once the token will be deployed you will be able to add
                            information on Etherscan using their procedure.`,
                            path: '',
                            pathName: 'Update Token Information'

                        }
                    ]
                },
                {
                    question: `Will people mark the token as SCAM?`,
                    answer: [
                        {
                            title: '',
                            description: `No, a Token deployed using Token Generator is not SCAM. Code
                            is well tested and updated regularly, token has verified
                            source code already used by thousands of tokens. It will be
                            SCAM if you use as it. Token Generator is FREE to use and
                            there are lot of tokens built on. Maybe someone used it to
                            SCAM but it doesn't mean you will use for it too.`,
                            path: '',
                            pathName: 'Documentation'
                        }
                    ]
                },
            ]
        },
        {
            name: 'Kaichain Blockchain and Ecosystem',
            faqs: [
                {
                    question: `What is Kaichain?`,
                    answer: [
                        {
                            title: '',
                            description: `Kaichain is a decentralized platform that runs Smart
                            Contracts: applications that run exactly as programmed
                            without any possibility of downtime, censorship, fraud or
                            third-party interference.`,
                            path: 'https://ethereum.org/en/',
                            pathName: 'Kaichain official website'
                        }
                    ]
                },
                {
                    question: `How to explore the Kaichain blockchain?`,
                    answer: [
                        {
                            title: '',
                            description: `A Block Explorer is basically a search engine that allows
                            users to easily lookup, confirm and validate transactions
                            that have taken place on the Kaichain Blockchain.`,
                            path: 'https://etherscan.io/',
                            pathName: 'Etherscan'
                        }
                    ]
                },
                {
                    question: ` What is a DApp? `,
                    answer: [
                        {
                            title: '',
                            description: `
                            DApp is an abbreviated form for decentralized
                            application.
                            
                      A DApp has its backend code running on a decentralized
                      peer-to-peer network. Contrast this with an app where
                      the backend code is running on centralized servers.

                      
                      A DApp can have frontend code and user interfaces
                      written in any language (just like an app) that can make
                      calls to its backend. Furthermore, its frontend can be
                      hosted on decentralized storage such as Swarm or
                      IPFS.
                      
                      For an application to be considered a Dapp (pronounced
                        Dee-app, similar to Email) it must meet the following
                        criteria:
                        The application must be completely open-source, it must operate autonomously, and with no entity controlling the majority of its tokens. The application may adapt its protocol in response to proposed improvements and market feedback but all changes must be decided by consensus of its users.
                        The application's data and records of operation must be cryptographically stored in a public, decentralized blockchain in order to avoid any central points of failure.
                        The application must use a cryptographic token (bitcoin or a token native to its system) which is necessary for access to the application and any contribution of value from (miners / farmers) should be rewarded in the application’s tokens.
                        The application must generate tokens according to a standard crytptographic algorithm acting as a proof of the value nodes are contributing to the application (Bitcoin uses the Proof of Work Algorithm).`
                        }
                    ]
                },
                {
                    question: `What is an KRC20 token?`,
                    answer: [
                        {
                            title: '',
                            description: `The Kaichain token standard (KRC20) defines a common list
                            of rules that an Kaichain token has to implement. Giving
                            developers the ability to program how new tokens will
                            function within the Kaichain ecosystem. This token
                            protocol became popular with crowdfunding companies via
                            initial coin offering (ICO).`,
                            path: 'https://eips.ethereum.org/EIPS/eip-20',
                            pathName: `KRC20 Technical specification`
                        }
                    ]
                },
                {
                    question: ` How to mint new tokens? `,
                    answer: [
                        {
                            title: '',
                            description: `A Block Explorer is basically a search engine that allows
                            users to easily lookup, confirm and validate transactions
                            that have taken place on the Kaichain Blockchain.`,
                            path: 'https://etherscan.io/',
                            pathName: 'Etherscan'
                        }
                    ]
                },
                {
                    question: `What is GAS and how to set Gas price?`,
                    answer: [
                        {
                            title: '',
                            description: `
                            "Gas" is the name for a special unit used in Kaichain. It
                            measures how much "work" an action or set of actions takes
                            to perform.
                            
                    Every operation that can be performed by a transaction or
                    contract on the Kaichain platform costs a certain number
                    of gas, with operations that require more computational
                    resources costing more gas than operations that require
                    few computational resources.

                    
                    The reason gas is important is that it helps to ensure an
                    appropriate fee is being paid by transactions submitted to
                    the network. By requiring that a transaction pay for each
                    operation it performs (or causes a contract to perform),
                    we ensure that network doesn't become bogged down with
                    performing a lot of intensive work that isn't valuable to
                    anyone.

                    
                    Use the links below to discover more about Gas and Gas
                    Price.`,
                            path: 'https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas',
                            pathName: `Good explanation of Gas`
                        }
                    ]
                },
                {
                    question: `What is a Multisig Wallet? `,
                    answer: [
                        {
                            title: '',
                            description: `If such an account (wallet) with privileges is lost or
                            were to fall in the hands of a malicious user, they could
                            wreak havoc in your system. A good option for securing
                            owner accounts is to use a special contract, such as a
                            multisig, instead of a regular externally owned
                            account.
                            
                    Multisig is a smart contract wallet running on Kaichain
                    that requires a minimum number of people to approve a
                    transaction before it can occur. If for example you have 3
                    main stakeholders in your business, you are able to set up
                    the wallet to require approval from all 3 people before
                    the transaction is sent. This assures that no single
                    person could compromise the funds.`,
                            path: 'https://safe.global/',
                            pathName: `Gnosis Safe Multisig`
                        }
                    ]
                },
            ]
        }
    ]
    return (
        <div>
            {faqsData && faqsData.map((faq, index) => {
                return <Accordion key={index} expanded={expanded === faq.name} onChange={handleChange(faq.name)} className={classes.accordion}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        {expanded ?
                            <span className="material-icons text-white">
                                arrow_drop_up
                            </span> :
                            <span className="material-icons text-white">
                                arrow_drop_down
                            </span>
                        }
                        <Typography variant='body1' className='text-white'>{faq.name && faq.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        {faq && faq.faqs && faq.faqs.map((data, index) => {
                            return <Accordion key={index} className={classes.accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className='text-white' />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant='body1' className='text-white'>{data.question && data.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {data.answer && data.answer.map((answer, index) => {
                                        return <div key={index} className='mt-3 mb-3'>
                                            <Typography variant='body1' className='font-weight-bold text-white'>
                                                {answer.title && answer.title}
                                            </Typography>
                                            <Typography className='text-white' variant='body2'>
                                                {answer.description && answer.description}
                                            </Typography>
                                            <a className='mt-3' href={answer.path}>
                                                {answer.pathName && answer.pathName}
                                            </a>
                                        </div>
                                    })}
                                </AccordionDetails>
                            </Accordion>
                        })}
                    </AccordionDetails>
                </Accordion >
            })}
        </div >
    );
}
