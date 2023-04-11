import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Search, MoreVert, Style } from '@mui/icons-material'
import { emptyProfilePicture } from '../../Constant/Data'
const Header=styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;


`
const Image=styled("img")({
    height:40,
    weight:40,
    objectFit:"cover",
    borderRadius:"50%"
})

const Name=styled(Typography)`
margin-left:12px !important;

`

const Status=styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgb(0,0,0.6)
`
const RighContainer=styled(Box)`
margin-left:auto;
& > svg{
    padding:8px;
    font-size:22px;
    color:#8f9ba2;
}

`

const ChartHeader = ({person}) => {
    return (
        <Header>
            <Image src={person.picture} alt='dp' />
            <Box>
                <Name>{person.name}</Name>
                <Status>offline</Status>
            </Box>
            <RighContainer>
                <Search />
                <MoreVert />
            </RighContainer>
        </Header>
    )
}

export default ChartHeader