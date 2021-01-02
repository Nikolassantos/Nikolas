import React from 'react'
import { CardBox } from '../../components/CardBox'
import { BoxContainer, FooterTitle, Header, ProjectsWrapper } from './styles'

export function Projects() {
  return (
    <ProjectsWrapper id="project">
      <Header>
        <h1>Projects</h1>
      </Header>
      <BoxContainer>
        <CardBox
          title="One page empresa"
          desc="🏬 One page com informações sobre uma empresa."
        />
        <CardBox />
        <CardBox />
      </BoxContainer>
      <BoxContainer>
        <CardBox />
        <CardBox />
      </BoxContainer>

      <FooterTitle>
        <a
          href="https://github.com/Nikolassantos?tab=repositories"
          target="__blank"
        >
          Repositórios no GitHub
        </a>
      </FooterTitle>
    </ProjectsWrapper>
  )
}
