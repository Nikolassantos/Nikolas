import React, { useState } from 'react'
import { InputPrimary } from '../../components/InputPrimary'
import { Button } from '../../components/PrimaryButton'
import { ContactWrapper, FormContainer, FormFooter, FormHeader } from './styles'

export function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [area, setArea] = useState('')
  console.log(email, name, area)

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setEmail(value)
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setName(value)
  }

  function handleAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value
    setArea(value)
  }

  return (
    <ContactWrapper id="contact">
      <h1>Contato</h1>
      <FormContainer>
        <FormHeader>
          <input
            value={name}
            onChange={handleNameChange}
            id="name-input"
            placeholder="Nome"
          />
          <input
            value={email}
            onChange={handleEmailChange}
            placeholder="E-mail"
          />
        </FormHeader>
        <textarea
          value={area}
          onChange={handleAreaChange}
          placeholder="Digite o motivo do contato aqui..."
        />
        <FormFooter>
          <Button label="Enviar" />
        </FormFooter>
      </FormContainer>
    </ContactWrapper>
  )
}
