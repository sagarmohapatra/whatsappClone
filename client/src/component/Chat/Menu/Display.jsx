import React from 'react'
import { Box, Typography,styled } from '@mui/material'
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
    return (
        <Component>
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