import React, { useEffect, useState, useContext } from 'react'
import { getUser } from '../../service/api'
import { Box, styled, Divider } from '@mui/material'
import Display from './Display'
import { AccountContext } from '../../context/AccountProvider'
const Component = styled(Box)`
height:81vh;
overflow:overlay;
`
const StyleDivider=styled(Divider)`
margin:0 0 0 70px;
background color:#e9edef;
opacity:0.6;
`

const Conversation = () => {
    const [user, setuser] = useState([])
    const { account } = useContext(AccountContext)
    console.log(user);
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUser();
            setuser(response)
        }
        fetchData()
    }, [])
    return (
        <Component>
            {

                user.map(val => (
                    val.sub !== account.sub &&
                    <>
                        <Display val={val} />
                        <StyleDivider />
                    </>
                ))

            }
        </Component>
    )
}

export default Conversation