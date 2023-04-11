import React,{useContext} from 'react'
import { Box } from '@mui/material'
import ChartHeader from './ChartHeader'
import Messages from './Messages'
import Footer from './Footer'
import { AccountContext } from '../../context/AccountProvider'
const ChatBox = () => {
    const {person}=useContext(AccountContext)
  return (
    <Box style={{height:"75%"}}>
<ChartHeader person={person}/>
<Messages person={person}/>
{/* <Footer/> */}
    </Box>
  )
}

export default ChatBox