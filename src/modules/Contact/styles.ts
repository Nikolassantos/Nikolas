import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const ContactWrapper = styled.div`
  padding: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    padding-bottom: 40px;
  }
  textarea {
    border: none;
    background-color: #f0f0f0;
    font-size: 14px;
    width: 100%;
    height: 150px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
  }
`

export const FormContainer = styled.div`
  background-color: #fff;
  width: 60%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #e7e7e7;
  padding: 30px;
`

export const FormHeader = styled.div`
  display: flex;
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
