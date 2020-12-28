import React from 'react'
import { AppWrapper, HeaderWrapper } from './styles'
import { FiMoon } from 'react-icons/fi'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Home() {
  function scrollToTop() {
    scroll.scrollToTop()
  }

  return (
    <AppWrapper>
      <HeaderWrapper>
        <h1>Nikolas Santos</h1>
        <nav>
          <ul>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="link"
            >
              <a href="">Sobre mim</a>
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="link"
            >
              <a href="">Projetos</a>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="link"
            >
              <a href="">Contato</a>
            </Link>
            <li id="list-icon" className="link">
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
