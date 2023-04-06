import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase,Box,styled } from '@mui/material';

const Component=styled(Box)`
background :#fff;
height:45px;
border-bottom:1px solid #F2F2F2;
align-items:center;
width:100%
`

const InputField=styled(InputBase)`
width:100%;
padding:16px;
padding-left:65px;
height:10px;
font-size:14px;



`
const Icon=styled(Box)`
position:absolute;
padding:6px;
height:100%;
color:#919191;


`
const Wrapper= styled(Box)`
background-color:#f0f2f5;
position:relative;
margin:0 16px;
border-radius:10px;
width:90%;
margin-top:6px;

`
const Search = () => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon  fontSize='small' />
                </Icon>
                <InputField placeholder='Search or start new chart' />
            </Wrapper>
        </Component>
    )
}

export default Search