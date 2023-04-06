import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
const MenuOption=styled(MenuItem)`
font-size:15px;
padding:15px 60px 5px 24px;
color:#4A4A4A;
`
const HeaderMenu = ({setopenDrawer}) => {
    const [open, setopen] = useState(null)
    const handleClose = () => {
        setopen(null)
    }
    const handleClick = (e) => {
        setopen(e.currentTarget) //open menu under click item so we have pass value in setopen
    }
    return (
        <div>
            <MoreVertIcon onClick={handleClick} />
            <Menu

                anchorEl={open}
                keepMounted//open menu under click item
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}//open menu under click item
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical:"top",  //open menu under click item
                    horizontal:"right"
                }}
            >
                <MenuOption onClick={handleClose}>New group</MenuOption>
                <MenuOption onClick={handleClose}>New community</MenuOption>
                <MenuOption onClick={handleClose}>Starred messages</MenuOption>
                <MenuOption onClick={()=>{handleClose();setopenDrawer(true);}}>Profile</MenuOption> // whenevr call two function
                <MenuOption onClick={handleClose}>Settings</MenuOption>
                <MenuOption onClick={handleClose}>Log out</MenuOption>
            </Menu>
        </div>
    )
}

export default HeaderMenu;