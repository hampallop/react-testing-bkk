const fakeUser = {
  username: 'jake',
  password: 'asdfjkl;',
}

describe('authentication', () => {
  // beforeEach(() => {
  //   return cy
  //     .logout()
  //     .createNewUser()
  //     .then(u => (user = u))
  //     .visit('/')
  // })
  beforeEach(() => cy.visit('http://localhost:3000/'))

  it('should allow existing users to login', () => {
    cy.getByText('Login')
      .click()
      .getByLabelText('Username')
      .type(fakeUser.username)
      .getByLabelText('Password')
      .type(fakeUser.password)
      .getByText('Login', { selector: 'button' })
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')

    cy.getByTestId('username-display').should('contain', fakeUser.username)
  })
})
