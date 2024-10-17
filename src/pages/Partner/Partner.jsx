import { Container, margin, styled } from '@mui/system'
import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/logo.png'
import stars from '../../assets/img/Star.png'
import logos from '../../assets/img/logos.png'

function Partner() {

    const CustomConatainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: theme.spacing(4),
        },
    }));

    const CustomBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(4),
        },
    }));

    const CustomDescription = styled(Typography)(({ theme }) => ({
        color: '#7D8589',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: theme.spacing(2),
    }));

  return (
    <Box sx={{mt: 10}}>
        <CustomConatainer>
            <CustomBox>
                <img src={logo} alt="logo" style={{maxWidth: '100%'}} />
                <CustomDescription variant='body2'>
                    More than 45,000 trust Fork & Spoon
                </CustomDescription>
            </CustomBox>
            <Box>
                <img src={stars} alt="stars" style={{maxWidth: '100%'}} />
                <CustomDescription variant='body2'>
                    5-Star Rating (2k+ Reviews)
                </CustomDescription>
            </Box>
        </CustomConatainer>
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <img src={logos} alt="logos" />
        </Container>
    </Box>
  )
}

export default Partner
