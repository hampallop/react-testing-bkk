import React from 'react'
import styled from 'react-emotion'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 200px;
`
function Form({ children, ...props }) {
  return <StyledForm {...props}>{children}</StyledForm>
}

export default Form
