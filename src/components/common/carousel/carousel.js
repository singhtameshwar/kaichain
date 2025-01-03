import { Container } from '@mui/system';
import React from 'react'
import './carousel.scss';
import Slider from "react-slick";
import Card from '../../common/card/card';
import { IsMobileWidth } from '../../../components/common/utill/utils';
import clsx from 'clsx';

const Carousel = () => {
    const mobileWidth = IsMobileWidth()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const packagesDetail = [
        {
            name: 'HelloKRC20',
            value: '0',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'NO'
                },
                {
                    label: 'Remove Copyright',
                    type: 'NO'
                },
                {
                    label: 'Supply Type',
                    type: 'SUPPLY_TYPE',
                    supply_value: '10k'
                },
                {
                    label: 'Access Type',
                    type: 'NONE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'NO'
                },
                {
                    label: 'Mintable',
                    type: 'NO'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'SimpleKRC20',
            value: '0.03',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'NO'
                },
                {
                    label: 'Remove Copyright',
                    type: 'NO'
                },
                {
                    label: 'Supply Type',
                    type: 'FIXED'
                },
                {
                    label: 'Access Type',
                    type: 'NONE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'NO'
                },
                {
                    label: 'Mintable',
                    type: 'NO'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'StandardKRC20',
            value: '0.07',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'FIXED'
                },
                {
                    label: 'Access Type',
                    type: 'NONE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'NO'
                },
                {
                    label: 'Mintable',
                    type: 'NO'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'BurnableKRC20',
            value: '0.095',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'FIXED'
                },
                {
                    label: 'Access Type',
                    type: 'NONE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'YES'
                },
                {
                    label: 'Mintable',
                    type: 'NO'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'MintableKRC20',
            value: '0.1',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'CAPPED'
                },
                {
                    label: 'Access Type',
                    type: 'OWNABLE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'NO'
                },
                {
                    label: 'Mintable',
                    type: 'YES'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'PausableKRC20',
            value: '0.3',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'FIXED'
                },
                {
                    label: 'Access Type',
                    type: 'OWNABLE'
                },
                {
                    label: 'Transfer Type',
                    type: 'PAUSABLE'
                },
                {
                    label: 'Burnable',
                    type: 'NO'
                },
                {
                    label: 'Mintable',
                    type: 'NO'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'CommonKRC20',
            value: '0.18',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'CAPPED'
                },
                {
                    label: 'Access Type',
                    type: 'OWNABLE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'YES'
                },
                {
                    label: 'Mintable',
                    type: 'YES'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'DeflationaryKRC20',
            value: '0.4',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'FIXED'
                },
                {
                    label: 'Access Type',
                    type: 'OWNABLE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'NO'
                },
                {
                    label: 'Mintable',
                    type: 'NO'
                },
                {
                    label: 'Deflationary',
                    type: 'YES'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'TaxableKRC20',
            value: '0.4',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'FIXED'
                },
                {
                    label: 'Access Type',
                    type: 'OWNABLE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'NO'
                },
                {
                    label: 'Mintable',
                    type: 'NO'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'YES'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'UnlimitedKRC20',
            value: '0.28',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'UNLIMITED'
                },
                {
                    label: 'Access Type',
                    type: 'ROLE_BASED'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'YES'
                },
                {
                    label: 'Mintable',
                    type: 'YES'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'NO'
                },
                {
                    label: 'Token Recover',
                    type: 'NO'
                }
            ]
        },
        {
            name: 'AmazingKRC20',
            value: '0.42',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'UNLIMITED'
                },
                {
                    label: 'Access Type',
                    type: 'OWNABLE'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'NO'
                },
                {
                    label: 'Mintable',
                    type: 'NO'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'YES'
                },
                {
                    label: 'Token Recover',
                    type: 'YES'
                }
            ]
        },
        {
            name: 'PowerfulKRC20',
            value: '0.5',
            details: [
                {
                    label: 'KRC20 Compliant',
                    type: 'YES'
                },
                {
                    label: 'Verified Source Code',
                    type: 'YES'
                },
                {
                    label: 'Customizable Decimals',
                    type: 'YES'
                },
                {
                    label: 'Remove Copyright',
                    type: 'YES'
                },
                {
                    label: 'Supply Type',
                    type: 'CAPPED'
                },
                {
                    label: 'Access Type',
                    type: 'ROLE_BASED'
                },
                {
                    label: 'Transfer Type',
                    type: 'UNSTOPPABLE'
                },
                {
                    label: 'Burnable',
                    type: 'YES'
                },
                {
                    label: 'Mintable',
                    type: 'YES'
                },
                {
                    label: 'Deflationary',
                    type: 'NO'
                },
                {
                    label: 'Taxable',
                    type: 'NO'
                },
                {
                    label: 'ERC1363',
                    type: 'YES'
                },
                {
                    label: 'Token Recover',
                    type: 'YES'
                }
            ]
        },

    ]

    return (
        <div className='carousel1 pt-3 pb-3'>
            <Container maxWidth='xl' className='pl-0 pr-0'>
                <Slider className='mt-4 pt-4 pb-5 mb-4' {...settings}>
                    {packagesDetail && packagesDetail.map((card, index) => {
                        return <div className='pl-3 pr-3' key={index}>
                            <Card
                                name={card.name}
                                value={card.value}
                                data={card.details}
                            />
                        </div>
                    })}
                </Slider>
            </Container>
        </div>
    )
}

export default Carousel