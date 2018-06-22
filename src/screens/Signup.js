import React from 'react'
import styled from 'react-emotion'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Card, CardHeader, CardBody } from '../common/Card'
import SignupForm from '../components/SignupForm'
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

function Signup() {
  return (
    <AuthContextConsumer>
      {({ user, signup, error }) =>
        (user != null ? (
          <Redirect to="/" />
        ) : (
          <div>
            <Navbar />
            <Layout>
              <Card>
                <Header>Sign up</Header>
                <CardBody>
                  <SignupForm onSubmit={signup} error={error} />
                </CardBody>
              </Card>
            </Layout>
          </div>
        ))
      }
    </AuthContextConsumer>
  )
}

export default Signup
