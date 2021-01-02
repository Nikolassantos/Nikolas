import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const ContactWrapper = styled.div`
  padding: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    @media (max-width: 850px) {
      font-size: 16px;
    }
    @media (max-width: 400px) {
      font-size: 13px;
    }
  }
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 30px;
    .title-icon {
      margin-left: 10px;
    }
  }
  textarea {
    width: 100%;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #000;
    font-family: 'Space Mono', monoespaço;
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    border: none;
    height: 100px;
  }

  @media (max-width: 850px) {
    textarea {
      font-size: 12px;
    }
  }
`

export const FormContainer = styled.div`
  background-color: #fff;
  width: 60%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #e7e7e7;
  padding: 30px;

  min-width: 350px;
`

export const FormHeader = styled.div`
  display: flex;

  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #000;
    font-family: 'Space Mono', monoespaço;
    padding: 10px;
    font-size: 16px;
    margin: 10px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 850px) {
    input {
      font-size: 12px;
    }
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
