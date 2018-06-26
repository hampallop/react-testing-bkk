import React from 'react'
import styled from 'react-emotion'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Card, CardHeader, CardBody } from '../common/Card'
import LoginForm from '../components/LoginForm'
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

function Login() {
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
                  <LoginForm onSubmit={login} error={error} />
                </CardBody>
              </Card>
            </Layout>
          </div>
        ))
      }
    </AuthContextConsumer>
  )
}

export default Login
