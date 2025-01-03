import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStyle } from './circular.image.card.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';

const CircularImageCard = (props) => {
    const { image, title, description, butttonText } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    return (
        <Card elevation={1} className={clsx((mobileWidth || tabletWidth) && 'w-100 pl-2 pr-2', 'w-100 pl-3 pr-3')}>
            {image ? <div className='d-flex w-100 justify-content-center mt-5 mb-3'>
                <CardMedia
                    className={clsx(!(mobileWidth || tabletWidth) && classes.cardMedia, tabletWidth && classes.cardMediaOnTablet, mobileWidth && classes.cardMediaOnMobile)}
                    component="img"
                    image={image}
                />
            </div> : null}
            <CardContent className={clsx(classes.cardContent, (mobileWidth) && 'pt-0', !mobileWidth && 'pl-0', tabletWidth && 'pl-4 pr-5')}>
                <Typography gutterBottom variant={clsx(!(mobileWidth || tabletWidth) && "h6", (tabletWidth || mobileWidth) && 'subtitle')} component="div"
                    className={clsx(classes.textStyle, 'text-center')}>
                    {title ? title : ""}
                </Typography>
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && "body2", (mobileWidth || tabletWidth) && 'body2')}
                    className={clsx(classes.textStyle, 'text-center')}>
                    {description ? description : ''}
                </Typography>
            </CardContent>
            {/* {butttonText ?
                <CardActions className={clsx(classes.cardAction, 'pt-4 pb-4 pl-3')}>
                    <Typography>
                        <Button className={clsx(classes.btn)}>{butttonText}</Button>
                    </Typography>
                </CardActions>
                : null
            } */}
        </Card >
    )
}

export default CircularImageCard