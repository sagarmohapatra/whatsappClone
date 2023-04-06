import React from 'react'
import { Drawer, Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import Profile from './Profile';
const drawerStyle = {
    top: 0,
    height: "100%",
    width: "39%",
    boxShadow: "none",

}
const Header = styled(Box)`
background:#008069;
height:107px;
color:#FFFFFF;
display:flex;
& > svg,& >p{
    margin-top:auto;
    padding:15px;
    font-weight:inherit;
    font-size:120%;

}
`
const Text=styled(Typography)`
font-size:"18px"
`
const Component = styled(Box)`
background:#f0f2f5;
height:85%
`
const InfoDrawer = ({ open, setopen }) => {
    const handleClose = () => {
        setopen(false)
    }
    return (
        <div>
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: drawerStyle }}
                style={{ zIndex: 1500 }}
            >

                <Header>
                    <ArrowBackIcon onClick={() => setopen(false)} />
                    <Text>Profile</Text>
                </Header>
                <Component>
                    <Profile />
                </Component>
            </Drawer>
        </div>
    )
}

export default InfoDrawer