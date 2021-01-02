import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const AppWrapper = styled.div`
  .active {
    border-bottom: 1px solid #333;
  }
`

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(44, 44, 44, 0.267);
  align-items: center;
  height: 90px;
  padding: 1% 10%;

  h1 {
    font-size: 22px;

    @media (max-width: 650px) {
      font-size: 18px;
    }
  }

  ul {
    display: flex;
  }
  .link {
    list-style-type: none;
    padding: 10px;
    cursor: pointer;
  }
  .link:hover {
    border-bottom: solid 3px ${colors.primaryColor};
  }
  #list-icon {
    border-bottom: none;
  }
  a {
    text-decoration: none;
    color: ${colors.secondaryColor};
    font-weight: 500;
    font-size: 16px;
  }

  .hamburguer {
    display: block;
    background: #000;
    width: 30px;
    height: 2px;
    position: relative;
    transition: 0.5s ease-in-out;
  }
  .hamburguer:before,
  .hamburguer:after {
    background: #000;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }
  .hamburguer:before {
    top: -10px;
  }
  .hamburguer:after {
    bottom: -10px;
  }

  input {
    display: none;
  }
  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }
  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }
  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }
`
