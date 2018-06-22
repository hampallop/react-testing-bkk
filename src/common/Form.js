import React from 'react'
import styled from 'react-emotion'
import Button from './Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 200px;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const FormButton = styled(Button)`
  margin-top: 16px;
`

export const LinkButton = FormButton.withComponent('a')

function Form({ children, ...props }) {
  return <StyledForm {...props}>{children}</StyledForm>
}

export default Form
