import React from 'react'
import { TitleStyle } from './Title.styled'

const Title = ({text}) => {
  return (
    <TitleStyle>
        {text}
    </TitleStyle>
  )
}

export default Title