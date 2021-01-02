import React from 'react'
import { AppWrapper, HeaderWrapper } from './styles'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Home() {
  function scrollToTop() {
    scroll.scrollToTop()
  }

  return (
    <AppWrapper>
      <HeaderWrapper>
        <h1>Portifólio</h1>
        <nav>
          <li>
            <nav>
              <input type="checkbox" id="menu-hamburguer" />

              <label htmlFor="menu-hamburguer">
                <div className="menu">
                  <span className="hamburguer"></span>
                </div>
              </label>
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
              </ul>
            </nav>
          </li>
        </nav>
      </HeaderWrapper>
    </AppWrapper>
  )
}
