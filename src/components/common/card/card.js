import { Button, Typography } from '@mui/material';
import React from 'react'
import './card.scss';

const Card = (props) => {
    const { name, value, data } = props

    return (
        <div id='card'>
            <div className="card" >
                <div className="card-body">
                    <Typography variant='body1' className="pt-3 text-center">
                        {name}
                    </Typography>
                    {value ?
                        <div className='w-100 d-flex pt-3 justify-content-center align-items-center'>
                            <Typography variant='h4' color='secondary' className="text-center">
                                {value}
                            </Typography>
                            <div className='d-flex align-items-end pt-3'>
                                <Typography variant='body2' className="text-center pl-3">
                                    KEC
                                </Typography>
                                <span className="material-icons pl-1">
                                    info
                                </span>
                            </div>
                        </div>
                        : null}
                    {data && data.map((data, index) => {
                        return <div key={index} className='w-100 d-flex justify-content-between border-top mt-2 align-items-center pt-2 pb-2'>
                            <Typography variant='body3'>{data.label}</Typography>
                            {data.type === 'YES' ?
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/success.svg`}
                                    width='20px'
                                    height='20px'
                                    alt='succes'
                                />
                                :
                                data.type === 'NO' ?
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/close.svg`}
                                        width='20px'
                                        height='20px'
                                        alt='succes'
                                    />
                                    :
                                    data.type === 'NONE' ?
                                        <Typography variant='caption' className='none-style pl-2 pr-2 rounded'>None</Typography>
                                        :
                                        data.type === 'UNSTOPPABLE' ?
                                            <Typography variant='caption' className='unstoppable-style pl-2 pr-2 rounded'>Unstoppable</Typography>
                                            :
                                            data.type === 'SUPPLY_TYPE' ?
                                                <Typography variant='caption' className='supply-type-style pl-2 pr-2 rounded'>{data.supply_value}</Typography>
                                                :
                                                data.type === 'FIXED' ?
                                                    <Typography variant='caption' className='fixed-style pl-2 pr-2 rounded'>Fixed</Typography>
                                                    :
                                                    data.type === 'CAPPED' ?
                                                        <Typography variant='caption' className='capped-style pl-2 pr-2 rounded'>Capped</Typography>
                                                        :
                                                        data.type === 'OWNABLE' ?
                                                            <Typography variant='caption' className='ownable-style pl-2 pr-2 rounded'>Ownable</Typography>
                                                            :
                                                            data.type === 'PAUSABLE' ?
                                                                <Typography variant='caption' className='pausable-style pl-2 pr-2 rounded'>Pausable</Typography>
                                                                :
                                                                data.type === 'UNLIMITED' ?
                                                                    <Typography variant='caption' className='unlimited-style pl-2 pr-2 rounded'>Unlimited</Typography>
                                                                    :
                                                                    data.type === 'ROLE_BASED' ?
                                                                        <Typography variant='caption' className='role-base-style pl-2 pr-2 rounded'>Role based</Typography>
                                                                        : null
                            }
                        </div>
                    })}
                    <Button className='w-100 mt-2 pt-2 pb-2' variant='contained' color='primary'>
                        Create
                    </Button>
                </div>
            </div>
        </div >

    )
}

export default Card