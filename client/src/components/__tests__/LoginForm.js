import React from 'react'
import { render } from 'react-testing-library'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'
import { Simulate } from 'react-dom/test-utils'

import LoginForm from '../LoginForm'

test('login form', () => {
  // —— Arrange ——
  // render a login form.
  // —— Act ——
  // fill forms (username, password).
  // —— Assert ——
  // assert submitHandler has been called with correct filled data.
})

test('with enzyme', () => {
  // —— Arrange ——
  const handleSubmit = jest.fn()
  const fakeUser = {
    username: 'rocky',
    password: 'italian stallion',
  }
  const wrapper = mount(<LoginForm onSubmit={handleSubmit} />)

  // —— Act ——
  const usernameInput = wrapper
    .find('input')
    .at(0)
    .hostNodes()
    .instance()

  usernameInput.value = fakeUser.username

  const passwordInput = wrapper
    .find('input')
    .at(1)
    .hostNodes()
    .instance()

  passwordInput.value = fakeUser.password

  wrapper.find('form').simulate('submit')

  // —— Assert ——
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})

test('with ReactDOM', () => {
  // —— Arrange ——
  const handleSubmit = jest.fn()
  const fakeUser = {
    username: 'rocky',
    password: 'italian stallion',
  }

  const container = document.createElement('div')
  ReactDOM.render(<LoginForm onSubmit={handleSubmit} />, container)

  // —— Act ——
  const inputs = container.querySelectorAll('input')
  const usernameInput = inputs[0]
  usernameInput.value = fakeUser.username

  const passwordInput = inputs[1]
  passwordInput.value = fakeUser.password

  const form = container.querySelector('form')
  Simulate.submit(form)

  // —— Assert ——
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})

test('with react-testing-library', () => {
  // —— Arrange ——
  const handleSubmit = jest.fn()
  const fakeUser = {
    username: 'rocky',
    password: 'italian stallion',
  }
  const { getByLabelText, getByText } = render(<LoginForm onSubmit={handleSubmit} />)

  // —— Act ——
  getByLabelText('Username').value = fakeUser.username
  getByLabelText('Password').value = fakeUser.password
  getByText('Login').click()

  // —— Assert ——
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})
