import React,{useContext} from 'react'
import { Box, Typography,styled } from '@mui/material'
import { AccountContext } from '../../context/AccountProvider'
import {  setconversation } from '../../service/api'
const Component=styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;

`
const Image=styled("img")(
    {
        width:50,
        height:50,
        borderRadius:"50%",
        padding:"0 14px",

    }
)
const Display = ({ val }) => {
    const {setperson,account}=useContext(AccountContext)

    const getUser=async()=>{
        setperson(val)
        await  setconversation({senderId:account.sub,receiverId:val.sub})
    }
    return (
        <Component onClick={()=>getUser()}>
            <Box>
                <Image src={val.picture} alt='img1' />

            </Box>
            <Box>
                <Typography>{val.name}</Typography>
            </Box>

        </Component>
    )
}

export default Display