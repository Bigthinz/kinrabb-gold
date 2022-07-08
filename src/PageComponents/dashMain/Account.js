import React from 'react'
import styled from 'styled-components'
import Board from '../../Components/Board/Board'
import BoardHead from '../../Components/BoardHead/BoardHead'
import Body from '../../Components/Body/Body'
import SideNav from '../../Components/SideNav/SideNav'
import TopNav from '../../Components/TopNav/TopNav'
import { BoardWrap,  Wrap } from './Account.styled'
import AccountBox from './AccountBox'

const Account = () => {
  return (
    <Body>
        <AccountBox/>       
    </Body>
  )
}

export default Account


