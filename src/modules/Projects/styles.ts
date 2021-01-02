import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const ProjectsWrapper = styled.div`
  text-align: center;
  padding: 70px;

  h1 {
    padding-bottom: 40px;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const FooterTitle = styled.h4`
  font-size: 18px;
  color: ${colors.primaryColor};
  padding-top: 30px;
`
