import { Box, styled, Typography } from '@mui/material';
import React from 'react'
import likeIcon from '../../assets/img/like.png'
import heartIcon from '../../assets/img/heart.png'
import shareIcon from '../../assets/img/share.png'

function CustomCard({
    img,
    price,
    item,
    likes,
    heart,
    share,
}) {

    const DishBox = styled(Box)(({ theme }) => ({
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        maxWidth: 350,
        backgroundColor: '#fff',
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
        '&:hover': {
            backgroundColor: '#F5F5F5',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease-in-out',
        },
    }));

    const InfoBox = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }));

    const ImgContainer = styled(Box)(() => ({
        width: '100%',
    }));

    const infoBox = [
        {
            img: likeIcon,
            info: likes,
        },
        {
            img: heartIcon,
            info: heart,
        },
        {
            img: shareIcon,
            info: share,
        },
    ];

    return (
        <DishBox>
            <ImgContainer>
                <img src={img} alt="foodphoto" style={{ maxWidth: '100%' }} />
            </ImgContainer>
            <Box sx={{ padding: '1rem' }}>
                <Typography variant='body2' sx={{ fontWeight: '700' }}>
                    ₹{price}
                </Typography>
                <Typography variant='body2' sx={{ my: 2 }}>
                    {item}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {
                        infoBox.map((item, index) => (
                            <InfoBox key={index}>
                                <img src={item.img} alt="icon" />
                                <Typography variant='body2' sx={{ mt: 1 }}>
                                    {item.info}
                                </Typography>
                            </InfoBox>
                        ))
                    }
                </Box>
            </Box>
        </DishBox>
    )
}

export default CustomCard
