import React, { Children } from 'react'
import { Body } from './Board.styled'

const Board = ({children}) => {
  return (
    <Body>
        {children}
    </Body>
  )
}

export default Board