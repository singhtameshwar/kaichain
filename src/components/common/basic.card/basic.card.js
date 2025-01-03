import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useStyle } from './basic.card.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';

const BasicCard = (props) => {
    const { title, description, label, bgColor, textColor } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    return (
        <Card
            sx={{ background: bgColor ? bgColor : '' }}
            elevation={1} className={clsx(!(mobileWidth || tabletWidth) && 'w-100 pl-3 pr-3', (mobileWidth || tabletWidth) && 'w-100 pl-2 pr-2', !bgColor ? classes.card : '')}>
            <CardContent className={clsx(classes.cardContent, 'pl-2 pr-2')}>
                <Typography gutterBottom variant={clsx(!(mobileWidth || tabletWidth) && "h6", (tabletWidth || mobileWidth) && 'subtitle')} component="div"
                    className={clsx(classes.textStyle1)}>
                    {title ? title : ""}
                </Typography>
                {label ?
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && "body1", (mobileWidth || tabletWidth) && 'body2')}
                        sx={{ color: textColor ? textColor : '' }}
                        className={clsx(!textColor ? classes.textStyle : '','pt-2 pb-2')}>
                        {label}
                    </Typography>
                    : null}
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && "body2", (mobileWidth || tabletWidth) && 'body2')}
                    sx={{ color: textColor ? textColor : '' }}
                    className={clsx(!textColor ? classes.textStyle : '')}>
                    {description ? description : ''}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default BasicCard