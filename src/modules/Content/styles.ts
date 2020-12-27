import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 650px;

  .apresentation {
    font-size: 18px;
    font-weight: 400;
    color: ${colors.Brown};
  }
  .name {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Space Mono', monospace;
  }
`
export const ApresentationContainer = styled.div``
export const PlayerContainer = styled.div``
