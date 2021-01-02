import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { AboutWrapper } from './styles'
import { Button } from '../../components/PrimaryButton'

export function AboutMe() {
  return (
    <AboutWrapper id="about">
      <h1>Sobre mim</h1>
      <p>
        {`Lorem Ipsum is simply dummy text of the printing 
          andLorem Ipsum is simply dummy.`}
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
