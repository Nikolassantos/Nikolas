import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { AboutWrapper } from './styles'
import { Button } from '../../components/PrimaryButton'

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
      <Button
        label="LinkedIn"
        link="https://www.linkedin.com/in/nikolassaantos/"
      >
        <FiLinkedin className="icon" />
      </Button>
    </AboutWrapper>
  )
}
