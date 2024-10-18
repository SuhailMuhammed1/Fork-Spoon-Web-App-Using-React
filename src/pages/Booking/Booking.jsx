import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import buyIcon from '../../assets/img/buy_icon.png'
import sellIcon from '../../assets/img/sell_icon.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from '@mui/system';

function Booking() {

    const CustomBox = styled(Box)(({ theme }) => ({
        with: '30%',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        }
    }));

    const GuidesBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        width: '70%',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0',
            flexDirection: 'column',
        },
    }));

    const GuideBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
    }));

    const guideBoxContent = [
        {
            icon: buyIcon,
            alt: 'buyIcon',
            title: 'Order Guides',
            description: 'How to Order'
        },
        {
            icon: sellIcon,
            alt: 'sellIcon',
            title: 'Booking Guides',
            description: 'How to Book'
        },
        {
            icon: sellIcon,
            alt: 'sellIcon',
            title: 'Payment Guides',
            description: 'Payment Methods'
        },
    ];

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px',
        }}>
            <div style={{ width: '5%', height: '5px', backgroundColor: '#000339', margin: '0 auto' }}></div>
            <Typography variant='h3' sx={{
                fontSize: '35px',
                fontWeight: 'bold',
                color: '#000339',
                my: 3,
            }}>
                How to Book ?</Typography>
            <CustomBox>
                <Typography variant='body2' sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#5A6473',
                    textAlign: 'center',
                }}>
                    Everything you need to know when you book for advance slot</Typography>
            </CustomBox>
            <GuidesBox>
                {
                    guideBoxContent.map((item, index) => (
                        <GuideBox key={index}>
                            <img src={item.icon} alt={item.alt} />
                            <Typography variant='body2' sx={{
                                fontSize: '20px',
                                fontWeight: '500',
                                color: '#383C45',
                                my: 1,
                            }}>
                                {item.title}
                            </Typography>
                            <Box sx={{
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Typography variant='body2' sx={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: '#0689FF'
                                }}>
                                    {item.description}
                                </Typography>
                                <ArrowRightAltIcon style={{ color: '#0689FF' }} />
                            </Box>
                        </GuideBox>
                    ))
                }
            </GuidesBox>
            <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="See Full Guides" guideBtn={true} />
        </Box>
    )
}

export default Booking
