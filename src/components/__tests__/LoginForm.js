import React from 'react'
import { render } from 'react-testing-library'
import LoginForm from '../LoginForm'

const fakeUser = {
  username: 'emma',
  password: 'watson',
}
test('calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  const { getByLabelText, getByText } = render(<LoginForm onSubmit={handleSubmit} />)

  getByLabelText('Username').value = fakeUser.username
  getByLabelText('Password').value = fakeUser.password

  getByText('Login').click()

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})
