import { Dialog, Box, Typography, List, ListItem } from '@mui/material'
import React from 'react'
import { qrCodeImage } from '../Constant/Data'
import styled from '@emotion/styled'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { addUser } from '../service/api';

const Component = styled(Box)`
display:flex;
`

const Container = styled(Box)`
padding:56px 0 56px 56px;

`
const QRCode = styled("img")(
  {
    height: 264,
    width: 264,
    margin: "50px 0 0 190px"
  }
)

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden"
}
const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px
`
const StyleList = styled(List)`
& > li{
  padding:0;
  margin-top:15px;
  font-size:18px;
  line-height:28px;
  color:#4a4a4a;
}
`

const LoginDialog = () => {
  const { setaccount } = useContext(AccountContext)
  const onLoginSuccess = async (res) => {
    const decode = jwt_decode(res.credential);
    console.log(decode);
    setaccount(decode);
    await addUser(decode)
  }
  const onLoginError = (res) => {
    console.log("login fail", res);
  }
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
    >
      <Component>
        <Container>
          <Title>Use WhatsApp on your computer</Title>
          <StyleList>
            <ListItem>1.Open WhatsApp on your phone</ListItem>
            <ListItem>2.Tap Menu :or Setting and select Linked Devices</ListItem>
            <ListItem>3.Tap on Link a Device</ListItem>
            <ListItem>4.Point your phone to this screen to capture the QR code</ListItem>
          </StyleList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt="qr code" />
          <Box style={{ position: "absolute", top: "50%", marginLeft: "230px" }}>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog