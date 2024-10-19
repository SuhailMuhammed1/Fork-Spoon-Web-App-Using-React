import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import foodCard from '../../assets/img/ambience.jpg'

function Ambience() {

    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: theme.spacing(10),
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
        },
    }));

    const ImgContainer = styled(Box)(({ theme }) => ({
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));

    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize: '64px',
        color: '#000',
        fontWeight: '700',
        [theme.breakpoints.down('md')]: {
            fontSize: '32px',
        },
    }));

    const SmallText = styled(Typography)(({ theme }) => ({
        fontSize: '18px',
        color: '#7B8087',
        fontWeight: '500',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
    }));

    const TextFlexBox = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(7),
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 5, 0, 5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: theme.spacing(5),
        },
    }));

    const Divider = styled('div')(({ theme }) => ({
        width: '13%',
        height: '5px',
        backgroundColor: '#000339',
        [theme.breakpoints.down('md')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }));

    const textFlexBox = [
        {
            largeText: '250+',
            smallText: 'Dishes',
        },
        {
            largeText: '300+',
            smallText: 'Trusted Clients',
        },
        {
            largeText: '350+',
            smallText: 'Delivery Per Day',
        },
    ];

    return (
        <Box sx={{ py: 10 }}>
            <Container>
                <CustomBox>
                    <ImgContainer>
                        <img src={foodCard} alt="foodCard" style={{ maxWidth: '100%' }} />
                    </ImgContainer>
                    <Box>
                        <Divider />
                        <Typography sx={{
                            fontSize: '35px',
                            color: '#000339',
                            fontWeight: '700',
                            my: 3,
                        }}>
                            You've found an ambience you love.
                        </Typography>
                        <Typography sx={{
                            fontSize: '16px',
                            color: '#5A6473',
                            lineHeight: '27px',
                        }}>
                            Dicover epitome of culinary at Food & fork, where every visit is an enchanting rendezvous with the art of dining.
                        </Typography>
                    </Box>
                </CustomBox>
                <TextFlexBox>
                    {
                        textFlexBox.map((item, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <LargeText>{item.largeText}</LargeText>
                                <SmallText>{item.smallText}</SmallText>
                            </Box>
                        ))
                    }
                </TextFlexBox>
            </Container>
        </Box>
    )
}

export default Ambience
