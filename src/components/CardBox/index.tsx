import React from 'react'
import { CardBoxWrapper, Describe, Footer, Title } from './styles'
import { ICardBox } from './types'

export const CardBox: React.FC<ICardBox> = () => {
  return (
    <CardBoxWrapper>
      <Title>Em breve</Title>
      <Describe>Projeto em construção.</Describe>
      <Footer></Footer>
    </CardBoxWrapper>
  )
}
