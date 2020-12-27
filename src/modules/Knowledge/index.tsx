import React from 'react'
import { SecondCardBox } from '../../components/secondCardBox'
import { CardBoxContainer, KnowledgeWrapper } from './styles'

export function Knowledge() {
  return (
    <KnowledgeWrapper>
      <h1>Conhecimentos</h1>
      <CardBoxContainer>
        <SecondCardBox />
      </CardBoxContainer>
    </KnowledgeWrapper>
  )
}
