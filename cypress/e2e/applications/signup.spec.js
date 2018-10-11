import {generateUserData} from '../../utils'

describe('authentication', () => {
  beforeEach(() => cy.visit('/'))

  it('should allow existing users to login', () => {
    const user = generateUserData()
    cy.getByText('Sign up')
      .click()
      .getByLabelText('Username')
      .type(user.username)
      .getByLabelText('Password')
      .type(user.password)
      .getByLabelText('Confirm Password')
      .type(user.password)
      .getByText('Sign up', {selector: 'button'})
      .click()
      .assertUrl('/')

    cy.getByTestId('username-display').should('contain', user.username)
  })
})
