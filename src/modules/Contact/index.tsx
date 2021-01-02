import React, { useState } from 'react'
import { InputPrimary } from '../../components/InputPrimary'
import { Button } from '../../components/PrimaryButton'
import { ContactWrapper, FormContainer, FormFooter, FormHeader } from './styles'
import { FaWhatsapp } from 'react-icons/fa'

export function Contact() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [area, setArea] = useState('')

  console.log(number, name, area)

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setNumber(value)
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
      <div className="title-container">
        <h1>Contato via WhatsApp</h1>
        <FaWhatsapp className="title-icon" size={30} />
      </div>
      <FormContainer>
        <FormHeader>
          <input
            value={name}
            onChange={handleNameChange}
            id="name-input"
            placeholder="Nome"
          />
        </FormHeader>
        <textarea
          value={area}
          onChange={handleAreaChange}
          placeholder="Digite o motivo do contato aqui..."
        />
        <FormFooter>
          <Button
            link={`https://api.whatsapp.com/send?phone=+5518988248606&text=Olá meu nome é ${name} e gostaria de falar sobre ${area}`}
            label="Enviar"
          />
        </FormFooter>
      </FormContainer>
    </ContactWrapper>
  )
}
