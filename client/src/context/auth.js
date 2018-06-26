import React from 'react'

import api from '../utils/api'

const AuthContext = React.createContext('auth')

export const AuthContextConsumer = AuthContext.Consumer

export class AuthContextProvider extends React.Component {
  initialState = { user: null, error: null, pending: false }
  state = this.initialState
  reset(overrides) {
    const newState = { ...this.initialState, ...overrides }
    this.setState(newState)
    return newState
  }
  componentDidMount() {
    return api.me().then((user) => {
      this.reset({ user })
    })
  }
  logout = async () => {
    this.reset({ pending: true })
    return api.logout().then(() => this.reset())
  }
  login = async (auth) => {
    this.reset({ pending: true })
    return api
      .login(auth)
      .then(user => this.reset({ user }))
      .catch(error => this.reset({ error }))
  }
  signup = async ({ username, password, confirmPassword }) => {
    this.reset({ pending: true })
    if (!password || !confirmPassword) {
      return this.reset({
        error: { message: 'Field can’t be empty.' },
      })
    }
    if (password !== confirmPassword) {
      return this.reset({
        error: { message: 'Password and confirm password doesn’t match.' },
      })
    }
    return api
      .signup({ username, password, confirmPassword })
      .then(user => this.reset({ user }))
      .catch(error => this.reset({ error }))
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logout: this.logout,
          login: this.login,
          signup: this.signup,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
