import React from 'react'
import { FooterWrapper } from './styles'
import { FiLinkedin, FiTwitter } from 'react-icons/fi'

export function Footer() {
  return (
    <FooterWrapper>
      <h4>Orgulhosamente feito por Nikolas Santos</h4>

      <div>
        <ul>
          <li>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/nikolassaantos/"
            >
              <FiLinkedin size={25} color="#fff" />
            </a>
          </li>
          <li>
            <a target="__blank" href="https://twitter.com/Nikolassaantos">
              <FiTwitter size={25} color="#fff" />
            </a>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  )
}
