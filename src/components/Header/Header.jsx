import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'
import React,{ useState } from 'react'
import CustomButton from '../CustomButton/CustomButton';
import logo from '../../assets/img/logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import FeaturePlayListIcon from '@mui/icons-material/FeaturedPlayList'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts'
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
// hello
function Header() {

    const [mobileMenu, setMobileMenu] = useState({left:false});

    function toogleDrawer(anchor, open, event) {
        if(event && event.type ==="keydown" && (event.type === "Tab" || event.type === "Shift")){
            return;
        }
        setMobileMenu({...mobileMenu,[anchor]:open});
    }

    const nav_titles = [
        {
            path: "/",
            display: "Home",
        },
        {
            path: "/dishes",
            display: "Dishes",
        },
        {
            path: "/services",
            display: "Services",
        },
        {
            path: "/about-us",
            display: "About Us",
        },
    ]

    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: 'none',
        },
    }));

    const NavBarLink = styled(Typography)(() => ({
        fontSize: '15px',
        color: '#4f5361',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
        }
    }));

    const NavBarLogo = styled("img")(({ theme }) => ({
        cursor: 'pointer',
        [theme.breakpoints.down("md")]: {
            display: 'none',
        },
    }));

    const NavBarMenu = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        display: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: 'block',
        },
    }));

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'Space-between',
            padding: '40px',
            maxWidth: 'auto',
            backgroundColor: '#FED801',
            marginLeft: '0px',
            marginBottom: '-24px',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2.5rem',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <NavBarMenu onClick={()=>toogleDrawer("left",true)}/>
                    <Drawer 
                    anchor='left'
                    open={mobileMenu["left"]}
                    onClose={()=>toogleDrawer("left",false)}
                    ></Drawer>
                    <NavBarLogo src={logo} alt="logo" />
                </Box>
                <NavBarLinksBox>
                    {
                        nav_titles.map((item, index) => (
                            <NavBarLink variant='body2'>{item.display}</NavBarLink>
                        ))
                    }
                </NavBarLinksBox>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
            }}>
                <NavBarLink variant='body2'>Sign Up</NavBarLink>
                <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Register" />
            </Box>
        </Box>
    )
}

export default Header
