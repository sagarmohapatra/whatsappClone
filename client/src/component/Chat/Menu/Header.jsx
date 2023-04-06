import React, { useContext,useState } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, styled } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';

import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px ;
display:flex;
align-items:center;
`
const Wrapper = styled(Box)`
margin-left:auto;
display:flex;
& > *{
    margin-left:2px;
    padding:8px;
    color:black;

}
&:first-child{
    font-size:22px;
    margin-right:8px;
    margin-top:3px

}
`
const Image = styled("img")({
    height: 42,
    width: 42,
    borderRadius: "50%"
})

const Header = () => {
    const [openDrawer,setopenDrawer]=useState(false)

    const { account } = useContext(AccountContext)
    const toggleDrawer=()=>{
        setopenDrawer(true)
    }
    return (
        <div>
            <Component>
                <Image src={account.picture} alt='dp' onClick={()=>toggleDrawer()} />
                <Wrapper>
                    <HistoryToggleOffIcon />
                    <ChatIcon />

                    <HeaderMenu setopenDrawer={setopenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setopen={setopenDrawer}/>
        </div>
    )
}

export default Header