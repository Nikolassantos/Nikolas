import React from 'react'
import { InputPrimary } from '../../components/InputPrimary'
import { Button } from '../../components/PrimaryButton'
import { ContactWrapper, FormContainer, FormFooter, FormHeader } from './styles'

export function Contact() {
  return (
    <ContactWrapper id="contact">
      <h1>Contato</h1>
      <FormContainer>
        <FormHeader>
          <InputPrimary />
          <InputPrimary placeholder="" />
        </FormHeader>
        <textarea placeholder="Digite o motivo do contato aqui..." />
        <FormFooter>
          <Button label="Enviar" />
        </FormFooter>
      </FormContainer>
    </ContactWrapper>
  )
}
