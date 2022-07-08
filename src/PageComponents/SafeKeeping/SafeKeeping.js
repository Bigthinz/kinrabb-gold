import React from 'react'
import Board from '../../Components/Board/Board'
import BoardHead from '../../Components/BoardHead/BoardHead'
import Body from '../../Components/Body/Body'
import SideNav from '../../Components/SideNav/SideNav'
import TopNav from '../../Components/TopNav/TopNav'
import { BoardWrap } from '../dashMain/Account.styled'
import OpenBox from '../OpenAccount/OpenBox'
import SafeDetails from './SafeDetails'

const SafeKeeping = () => {
  return (
    <Body>
        <SafeDetails/>
    </Body>

  )
}

export default SafeKeeping