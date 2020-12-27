import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const AboutWrapper = styled.div`
  background-color: ${colors.lightGrey};
  padding: 1%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 60%;
    padding: 10px;
    text-align: center;
  }
`
