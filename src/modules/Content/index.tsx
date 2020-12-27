import React from 'react'
import { Button } from '../../components/PrimaryButton'
import {
  ApresentationContainer,
  ContentWrapper,
  PlayerContainer
} from './styles'
import { FiGithub } from 'react-icons/fi'
import { Player } from '@lottiefiles/react-lottie-player'

export function Content() {
  return (
    <ContentWrapper>
      <ApresentationContainer>
        <h2>
          <span className="apresentation">Olá, eu sou o</span>
          <br />
          <span className="name">Nikolas Santos.</span>
          <br />
          <span className="apresentation">Desenvolvedor Fullstack.</span>
        </h2>

        <Button label="Meu GitHub" link="http://github.com/Nikolassantos">
          <FiGithub className="icon" />
        </Button>
      </ApresentationContainer>

      <PlayerContainer>
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/private_files/lf30_gcroxmlt.json"
          style={{ height: '500px', width: '500px' }}
          speed={2}
        />
      </PlayerContainer>
    </ContentWrapper>
  )
}
