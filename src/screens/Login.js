import React from 'react'
import styled from 'react-emotion'
import Navbar from '../components/Navbar'
import { Card, CardHeader, CardBody } from '../common/Card'
import Form from '../common/Form'
import Button from '../common/Button'
import { Input, Label } from '../common/Inupt'

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

export default function () {
  return (
    <div>
      <Navbar />
      <Layout>
        <Card>
          <Header>Login</Header>
          <CardBody>
            <Form>
              <FieldContainer>
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" />
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </FieldContainer>
              <FormButton stretch type="submit">
                Login
              </FormButton>
              <FormButton inverse stretch type="submit">
                Sign up
              </FormButton>
            </Form>
          </CardBody>
        </Card>
      </Layout>
    </div>
  )
}
