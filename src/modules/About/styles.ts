import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const AboutWrapper = styled.div`
  background-color: ${colors.lightGrey};
  padding: 1%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;

  p {
    width: 60%;
    padding: 10px;
    text-align: center;
  }

  h1 {
    padding-bottom: 40px;
  }
`
