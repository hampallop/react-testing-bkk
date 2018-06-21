import React, { Component } from 'react'
import styled from 'react-emotion'
import './App.css'

const paddingSize = '16px'
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 200px;
`

const labelSpace = '100px'
const gridGap = '16px'
const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: ${labelSpace} 1fr;
  grid-gap: ${gridGap};
`

const contentWidth = '1000px'
const NavContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${contentWidth};
  padding: ${paddingSize};
`
const NavItemContainer = styled.div`
  margin-left: auto;
`
const boxShadow = '0 3px 16px rgba(0, 0, 0, 0.08)'
const Nav = styled.nav`
  background: #fff;
  box-shadow: ${boxShadow};
  margin-bottom: 16px;
`
const LogoText = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
`
const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`
const colors = {
  primaryBlue: '#0820EC',
  grey: '#ECEDED',
  black: '#24292E',
  greyish: '#8291ac',
}
const LinkText = styled(Text.withComponent('a'))`
  font-weight: 500;
  text-decoration: none;
  color: ${colors.black};
  transition: all 0.3s ease;
  &:hover {
    color: ${colors.primaryBlue};
  }
`
const NavItem = styled.div`
  display: inline-block;
  margin-left: 16px;
`
const sidebarWidth = '240px'
const MainLayout = styled.div`
  display: grid;
  grid-template-columns: ${sidebarWidth} 1fr;
  grid-gap: 16px;
  margin: 0 auto;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: ${contentWidth};
  padding: ${paddingSize};
`
const radiusSize = '6px'
const NavBox = styled.a`
  display: block;
  background: #fff;
  padding: 0 16px;
  font-size: 16px;
  box-shadow: ${boxShadow};
  font-weight: 500;
  border-radius: ${radiusSize};
  border: 0;
  text-align: left;
  line-height: 52px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const Header = styled.header`
  font-size: 60px;
  color: ${colors.grey};
  grid-column: 2;
  line-height: 1;
  font-weight: 600;
`

const Card = styled.div`
  position: relative;
  background: #fff;
  box-shadow: ${boxShadow};
  border-radius: ${radiusSize};
  padding: ${paddingSize};

  ${'' /* background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(${props => props.src});

  background-repeat: no-repeat;
  background-size: cover; */} min-height: 200px;
`

const CardHeader = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;
`
const TripsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 48px;
`
const imageSize = '130px'
const CardImage = styled.img`
  border-radius: ${radiusSize};
  box-shadow: ${boxShadow};
  width: 100%;
  width: calc(100% - 32px);
  position: absolute;
  top: -16px;
  height: 130px;
`
const CardContent = styled.div`
  margin-top: calc(${imageSize} - 16px);
`
const CardContentDuration = styled.div`
  color: ${colors.greyish};
  font-size: 14px;
  line-height: 1.3;
  b {
    font-weight: 500;
  }
`
const CardContentCost = styled.div`
  color: ${colors.greyish};
  font-size: 14px;
  line-height: 1.3;
  b {
    font-weight: 500;
  }
`
const CardContentDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(2, fit-content(100%));
  grid-column-gap: 16px;
`
const Divider = styled.div`
  margin: 16px auto;
  border-bottom: 1px solid ${colors.grey};
`
const JoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background: ${colors.primaryBlue};
  color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 8px 30px -11px ${colors.primaryBlue};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`

function TripCard({
  title, durations, cost, imgUrl,
}) {
  return (
    <Card>
      <CardImage src={imgUrl} />
      <CardContent>
        <CardHeader>{title}</CardHeader>
        <CardContentDescription>
          <CardContentDuration>
            <b>{durations}</b> Days
          </CardContentDuration>
          <CardContentCost>
            <b>{cost}</b> THB
          </CardContentCost>
        </CardContentDescription>
        <Divider />
        <JoinButton>join</JoinButton>
      </CardContent>
    </Card>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavContainer>
            <LogoText>Journey Blog</LogoText>
            <NavItemContainer>
              <NavItem>
                <LinkText href="/signup">Sign up</LinkText>
              </NavItem>
              <NavItem>
                <LinkText href="/login">Login</LinkText>
              </NavItem>
            </NavItemContainer>
          </NavContainer>
        </Nav>
        <Container>
          <MainLayout>
            <Header>My Trips</Header>
            <aside>
              <NavBox href="/">My Trips</NavBox>
            </aside>
            <div>
              <TripsLayout>
                <TripCard
                  imgUrl="https://images.unsplash.com/photo-1512491289751-2ab5001e9b48?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8eaf38afc1e027ce583aa69558c0031&auto=format&fit=crop&w=2850&q=80"
                  title="Tokyo - Kyoto"
                  durations="8"
                  cost="86k"
                />
                <TripCard
                  imgUrl="https://images.unsplash.com/photo-1497302347632-904729bc24aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=144d48440ee329f1d475ac5db69d66fc&auto=format&fit=crop&w=1350&q=80"
                  title="Colorado"
                  durations="8"
                  cost="86k"
                />
                <TripCard
                  imgUrl="https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-0.3.5&s=34113baef0783b0b3fb1dafee3c7dd34&auto=format&fit=crop&w=1350&q=80"
                  title="Venice, Italy"
                  durations="8"
                  cost="86k"
                />
                <TripCard
                  imgUrl="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd27a515bce2dade58bc288fde28f290&auto=format&fit=crop&w=1393&q=80"
                  title="Königssee, Schönau am Königssee, Germany"
                  durations="8"
                  cost="86k"
                />
              </TripsLayout>
            </div>
            <StyledForm
              onSubmit={(e) => {
                e.preventDefault()
                console.log('username', e.target.elements.username.value)
                console.log('password', e.target.elements.password.value)
              }}
            >
              <FieldContainer>
                <label htmlFor="username">username</label>
                <input id="username" type="text" />
                <label htmlFor="password">password</label>
                <input id="password" type="password" />
              </FieldContainer>
              <button type="submit">submit</button>
            </StyledForm>
          </MainLayout>
        </Container>
      </div>
    )
  }
}

export default App
