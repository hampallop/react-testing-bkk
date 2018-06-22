import React, { Component } from 'react'
import styled from 'react-emotion'
import Navbar from '../components/Navbar'
import TripCard from '../components/TripCard'
import api from '../utils/api'

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

class Home extends Component {
  static defaultProps = {
    api,
  }
  state = { posts: [], joinList: [] }
  componentDidMount() {
    this.props.api.post.get().then((posts) => {
      this.setState({ posts })
    })
    this.props.api.joinList.get().then((list) => {
      this.setState({ joinList: list.map(item => item.postId) })
    })
  }
  render() {
    console.log('this.state', this.state)
    const { posts, joinList } = this.state
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
                {posts.map(post => (
                  <TripCard
                    key={post.id}
                    imgUrl={post.imgUrl}
                    title={post.title}
                    durations={post.durations}
                    cost={post.cost}
                    joined={joinList.indexOf(post.id) >= 0}
                  />
                ))}
              </TripsLayout>
            </div>
          </MainLayout>
        </Container>
      </div>
    )
  }
}

export default Home
