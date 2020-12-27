import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { AboutWrapper } from './styles'
import { ButtonWrapper } from '../PrimaryButton/styles'

export function AboutMe() {
  return (
    <AboutWrapper>
      <h1>Sobre mim</h1>
      <p>
        {`Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scra
          mbled it to`}
      </p>
      <ButtonWrapper>
        <FiLinkedin className="icon" />
        <a href="https://www.linkedin.com/in/nikolassaantos/" target="__blank">
          {'LinkedIn'}
        </a>
      </ButtonWrapper>
    </AboutWrapper>
  )
}
