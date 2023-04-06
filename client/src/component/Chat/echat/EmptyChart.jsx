import React from 'react'
import { Box, Typography } from '@mui/material'
import { emptyChatImage } from '../../Constant/Data'
import styled from '@emotion/styled'
const Component=styled(Box)`
background:#f8f9fa;
padding:30px 0;
text-align:center;
height:100%;

`
const Container=styled(Box)`
padding:0 
`
const Image=styled("img")({
width:400,
marginTop:80

})
const Title=styled(Typography)`
font-size:32px;
margin:5px 0 10px 0;
font-family:inherit;
font-weight:300;
color:#41515d;
`
const SubTitle=styled(Typography)`
font-size:14px;
color:#667781;
font-weight:400;
font-family:inherit;
`
const EmptyChart = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="imgage" />
        <Title>WhatsApp web</Title>
        <SubTitle>Send and receive messages without keeping your phone online.
          <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle >
      </Container>
    </Component>
  )
}

export default EmptyChart