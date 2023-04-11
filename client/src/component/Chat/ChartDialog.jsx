import { Dialog, Box, styled } from '@mui/material'
import React,{useContext} from 'react'
import Menu from './Menu/Menu'
import EmptyChart from './echat/EmptyChart'
import ChatBox from './echat/ChatBox'
import { AccountContext } from '../context/AccountProvider'
const dialogStyle = {
    height: "99%",
    margin: "20px",
    width: "100%",
    maxWidth: "100%",
    borderRadius: 0,
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}
const Component = styled(Box)`
display:flex
`
const LeftComponent = styled(Box)`
min-width:480px
`
const RightComponent = styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0, 0,0,0.14)
`

const ChartDialog = () => {
    const {person}=useContext(AccountContext)
    return (
        <div>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogStyle }}
                hideBackdrop={true}
                maxWidth={"md"}
            >
                <Component>
                    <LeftComponent>
                        <Menu />
                    </LeftComponent>
                    <RightComponent>
                        
                        {
                            Object.keys(person).length ? <ChatBox/> : <>
                            <EmptyChart/>
                            </>
                        }
                    </RightComponent>
                </Component>

            </Dialog>
        </div>
    )
}

export default ChartDialog