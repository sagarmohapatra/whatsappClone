import React from 'react'
import { useContext } from 'react'
import LoginDialog from './Account/LoginDialog'
import ChartDialog from './Chat/ChartDialog'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import { AccountContext } from './context/AccountProvider'
const Messanger = () => {

    const { account } = useContext(AccountContext)

    const LoginHeader = styled(AppBar)`
    height:210px;
    background-color:#00a884;
    box-shadow:none;
    `
    const Header = styled(AppBar)`
    height:125px;
    background-color:#00A884;
    box-shadow:none;
    `
    const Component = styled(Box)`
    height:100vh;
    background:#DCDC 
    `

    return (
        <Component>
            {
                account ?
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>
                        <ChartDialog />

                    </>
                    :
                    <>

                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialog />
                    </>
            }

        </Component>
    )
}

export default Messanger