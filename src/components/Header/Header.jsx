import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'
import React from 'react'

function Header() {

    const nav_titles = [
        {
            path:"/",
            display:"Home",
        },
        {
            path:"/dishes",
            display:"Dishes",
        },
        {
            path:"/services",
            display:"Services",
        },
        {
            path:"/about-us",
            display:"About Us",
        },
    ]

    const NavBarLinksBox = styled(Box)(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            display: 'none',
        },
    }));

    const NavBarLink = styled(Typography)(() => ({
        fontSize: '15px',
        color: '#4f5361',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover':{
            color: '#fff',
        }
    }));

  return (
    <Box>
        <Box>
            <NavBarLinksBox>
                {
                    nav_titles.map((item, index)=>(
                        <NavBarLink>{item.display}</NavBarLink>
                    ))
                }
            </NavBarLinksBox>
        </Box>
        <Box></Box>
    </Box>
  )
}

export default Header
