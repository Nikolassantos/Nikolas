import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { AboutWrapper } from './styles'
import { ButtonWrapper } from '../PrimaryButton/styles'

export function AboutMe() {
  return (
    <AboutWrapper>
      <h1>Sobre mim</h1>
      <p>
        {`Meu nome é Nikolas dos Santos, tenho 16 anos, moro no brazil,
        especificamente na cidade de Dracena-SP, atualmente estou estudando e
        atuando em uma empresa como Fullstack developer.Amo desenvolver e
        resolver problemas, no tempo livre gosto de me dedicas a ajudar pessoas
        na comunidade.`}
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
