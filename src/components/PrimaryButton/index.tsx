/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { ButtonWrapper } from './styles'
import { IButton } from './types'

export const Button: React.FC<IButton> = ({ label, link, children }) => {
  return (
    <ButtonWrapper>
      {children}
      <a href={link} target="_blank">
        {label}
      </a>
    </ButtonWrapper>
  )
}
