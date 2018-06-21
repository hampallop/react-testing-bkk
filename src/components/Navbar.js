import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import { colors, contentWidth, boxShadow, paddingSize } from '../shared/style'

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`
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
const Nav = styled.nav`
  background: #fff;
  box-shadow: ${boxShadow};
  margin-bottom: 16px;
`
const LogoText = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
`
const NavContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${contentWidth};
  padding: ${paddingSize};
`
const NavItemContainer = styled.div`
  margin-left: auto;
`
function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Link to="/">
          <LogoText>Journey Blog</LogoText>
        </Link>
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
  )
}

export default Navbar
