import React, { Component } from 'react'
import styled from 'react-emotion'
import Navbar from '../components/Navbar'
import TripCard from '../components/TripCard'

import {
  colors,
  contentWidth,
  boxShadow,
  paddingSize,
  radiusSize,
} from '../shared/style'

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

const TripsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 48px;
`

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
          </MainLayout>
        </Container>
      </div>
    )
  }
}

export default App
