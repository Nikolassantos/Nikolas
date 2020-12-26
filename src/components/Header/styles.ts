import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const AppWrapper = styled.div``

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
  }

  ul {
    display: flex;
  }
  li {
    list-style-type: none;
    padding: 10px;
    cursor: pointer;
  }
  li:hover {
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
`
