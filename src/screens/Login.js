import React from 'react'
import styled from 'react-emotion'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Card, CardHeader, CardBody } from '../common/Card'
import Form from '../common/Form'
import Button from '../common/Button'
import { Input, Label, ErrorMessage } from '../common/Inupt'
import { AuthContextConsumer } from '../context/auth'

const widthSize = '360px'
const Layout = styled.div`
  max-width: ${widthSize};
  margin: 0 auto;
`
const Header = styled(CardHeader)`
  text-align: center;
  font-size: 24px;
  padding-top: 24px;
  line-height: 1.5;
`
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const FormButton = styled(Button)`
  margin-top: 16px;
`

const LinkButton = FormButton.withComponent('a')

function LoginForm() {
  return (
    <AuthContextConsumer>
      {({ user, login, error }) =>
        (user != null ? (
          <Redirect to="/" />
        ) : (
          <div>
            <Navbar />
            <Layout>
              <Card>
                <Header>Login</Header>
                <CardBody>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault()
                      const { username, password } = e.target.elements
                      const auth = {
                        username: username.value,
                        password: password.value,
                      }
                      login(auth)
                    }}
                  >
                    <FieldContainer>
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" type="text" />
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                      {error && (
                        <ErrorMessage>
                          Your username or password doesn’t match.
                        </ErrorMessage>
                      )}
                    </FieldContainer>
                    <FormButton stretch type="submit">
                      Login
                    </FormButton>
                    <LinkButton inverse stretch href="/signup">
                      Sign up
                    </LinkButton>
                  </Form>
                </CardBody>
              </Card>
            </Layout>
          </div>
        ))
      }
    </AuthContextConsumer>
  )
}

export default LoginForm
