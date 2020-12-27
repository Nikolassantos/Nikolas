/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { SecondCardBoxWrapper } from './styles'
import ReactStars from 'react-stars'
import { colors } from '../../styles/theme'
import { ISecondCardBox } from './types'

export const SecondCardBox: React.FC<ISecondCardBox> = ({
  children,
  tech,
  experience,
  value
}) => {
  return (
    <SecondCardBoxWrapper>
      {children}
      <h3>{tech}</h3>
      <p>{experience}</p>
      <ReactStars
        count={5}
        color2={colors.primaryColor}
        value={value}
        size={35}
        edit={false}
      />
    </SecondCardBoxWrapper>
  )
}
