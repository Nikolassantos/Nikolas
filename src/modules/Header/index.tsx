import React from 'react'
import { AppWrapper, HeaderWrapper } from './styles'
import { FiMoon } from 'react-icons/fi'

export default function Home() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <h1>Nikolas Santos</h1>
        <nav>
          <ul>
            <li>
              <a href="">Sobre mim</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Conhecimentos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li id="list-icon">
              <a>
                <FiMoon className="moon-icon" size={25} />
              </a>
            </li>
          </ul>
        </nav>
      </HeaderWrapper>
    </AppWrapper>
  )
}
