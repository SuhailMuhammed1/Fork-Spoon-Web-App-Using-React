import { styled } from '@mui/system'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import fb from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import insta from '../../assets/img/instagram.png'

function Footer() {

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const FooterMenuTitle = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    color: '#1C1C1D',
    fontWeight: '700',
    marginBottom: theme.spacing(2),
  })) 

  const FooterLinks = styled('span')(() => ({
    fontSize: '16px',
    color: '#000066',
    fontWeight: '300',
    cursor: 'pointer',
    '&:hover': {
      color: '#6682FF',
    },
  }));

  const footerLinks = [
    {
      path: '/guides/',
      display: 'Guides',
      group: 1,
    },
    {
      path: '/services/',
      display: 'Services',
      group: 1,
    },
    {
      path: '/contact-us/',
      display: 'Contact Us',
      group: 1,
    },
    {
      path: '/location/',
      display: 'Location',
      group: 2,
    },
    {
      path: '/partnerships/',
      display: 'Partnerships',
      group: 2,
    },
    {
      path: '/privacy-policy/',
      display: 'Terms of use & Privacy Policy',
      group: 2,
    },
  ];

  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }));

  return (
    <Box sx={{
      backgroundColor: '#FFF682', py: 10,
    }}>
      <CustomContainer>
        <Box>
          <FooterMenuTitle>Featured</FooterMenuTitle>
          {
            footerLinks.filter((item) => item.group === 1).map((item, index) => (
              <React.Fragment key={index}>
                <FooterLinks>{item.display}</FooterLinks>
                <br />
              </React.Fragment>
            ))
          }
        </Box>
        <Box>
          <FooterMenuTitle>Overview</FooterMenuTitle>
          {
            footerLinks.filter((item) => item.group === 2).map((item, index) => (
              <React.Fragment key={index}>
                <FooterLinks>{item.display}</FooterLinks>
                <br />
              </React.Fragment>
            ))
          }
        </Box>
        <Box>
          <FooterMenuTitle>Get in touch</FooterMenuTitle>
          <Typography sx={{
            fontSize: '16px',
            color: '#7A7A7E',
            fontWeight: '500',
            mb: 2,
          }}>
            Keep in touch with our social media pages.
          </Typography>
          <IconBox>
            <img src={fb} alt="facebook" style={{cursor: 'pointer'}} />
            <img src={twitter} alt="twitter" style={{cursor: 'pointer'}} />
            <img src={insta} alt="instagram" style={{cursor: 'pointer'}} />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  )
}

export default Footer
