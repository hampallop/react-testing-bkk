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
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`
function Form({ children, ...props }) {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault()
        console.log('username', e.target.elements.username.value)
        console.log('password', e.target.elements.password.value)
      }}
      {...props}
    >
      {children}
    </StyledForm>
  )
}

export default Form
