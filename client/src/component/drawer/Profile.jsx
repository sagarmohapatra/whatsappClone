import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { AccountContext } from '../context/AccountProvider'
import styled from '@emotion/styled'
const ImageContainer = styled(Box)`
display:flex;
justify-content:center;

`
const Image = styled("img")(
    {
        width: 200,
        height: 200,
        borderRadius: "50%",
        padding: "25px 0",
    }
)
const BoxWrraper = styled(Box)`
background:#ffffff;
box-shadow:0 1px 3px rgba(0,0,0,0.08);
padding:30px 30px 2px;
& :first-child{
    font-size:13px;
    color:#009688;
    font-weight:200;
}
& :last-child{
    margin:14px 0;
    color:#4a4a4a;
}
`
const DescriptionContainer = styled(Box)`
padding:15px 20px 28px 30px;
&> p{
    font-size:13px;
    color:#8696a0;
}
`
const Profile = () => {
    const { account } = useContext(AccountContext)
    return (
        <div>
            <ImageContainer>
                <Image src={account.picture} alt='dp' />
            </ImageContainer>
            <BoxWrraper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrraper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </DescriptionContainer>
            <BoxWrraper>
            
                <Typography>About</Typography>
                <Typography>Be yourself because an original is worth more than a copy 😎</Typography>
                </BoxWrraper>
            
        </div>
    )
}

export default Profile