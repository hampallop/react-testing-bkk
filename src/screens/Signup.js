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
  margin-bottom: 16px;
`

export default function () {
  return (
    <div>
      <Navbar />
      <Layout>
        <Card>
          <Header>Sign up</Header>
          <CardBody>
            <Form>
              <FieldContainer>
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" />
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </FieldContainer>
              <Button stretch type="submit">
                Sign up
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Layout>
    </div>
  )
}
