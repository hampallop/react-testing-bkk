import React from 'react'
import Form, { FieldContainer, FormButton } from '../common/Form'
import { Input, Label, ErrorMessage } from '../common/Inupt'

function SignupForm({ onSubmit, error = {} }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        const { username, password, confirmPassword } = e.target.elements
        const auth = {
          username: username.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
        }
        onSubmit(auth)
      }}
    >
      <FieldContainer>
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input id="confirmPassword" type="password" />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </FieldContainer>
      <FormButton stretch type="submit">
        Sign up
      </FormButton>
    </Form>
  )
}

export default SignupForm
