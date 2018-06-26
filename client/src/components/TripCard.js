import React from 'react'
import styled, { css } from 'react-emotion'
import { Link } from 'react-router-dom'
import { AuthContextConsumer } from '../context/auth'

import { colors, boxShadow, paddingSize, radiusSize } from '../shared/style'
import { Card, CardHeader, CardBody, CardFooter } from '../common/Card'

const imageSize = '130px'

const CardImage = styled.img`
  border-radius: ${radiusSize};
  box-shadow: ${boxShadow};
  width: 100%;
  width: calc(100% - 32px);
  position: absolute;
  top: -${paddingSize};
  left: ${paddingSize};
  height: 130px;
`
const CardBodyDuration = styled.div`
  color: ${colors.greyish};
  font-size: 14px;
  line-height: 1.3;
  b {
    font-weight: 500;
  }
`
const CardBodyCost = styled.div`
  color: ${colors.greyish};
  font-size: 14px;
  line-height: 1.3;
  b {
    font-weight: 500;
  }
`
const CardBodyDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(2, fit-content(100%));
  grid-column-gap: 16px;
`
const Divider = styled.div`
  margin-top: 16px;
  border-bottom: 1px solid ${colors.grey};
`
const joinButtonStyle = props => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  box-shadow: 0 8px 30px -11px ${colors.primaryBlue};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  background: ${props.joined ? '#fff' : colors.primaryBlue};
  color: ${props.joined ? colors.primaryBlue : '#fff'};
  border: 1px solid #eaeaea;

  &::after {
    font-weight: 600;
    content: "${props.joined ? '+1' : 'join'}";
  }

  &:hover {
    box-shadow: 0 13px 38px -10px ${colors.primaryBlue};
  }
  &:active {
    box-shadow: none;
  }
`
const JoinButton = styled.button`
  ${joinButtonStyle};
`
const JoinLinkButton = styled(Link)`
  ${joinButtonStyle};
`
function TripCard({
  title, durations, cost, imgUrl, joined,
}) {
  return (
    <Card>
      <CardImage src={imgUrl} />
      <CardHeader mt={`calc(${imageSize} - 16px)`}>{title}</CardHeader>
      <CardBody pt="0">
        <CardBodyDescription>
          <CardBodyDuration>
            <b>{durations}</b> Days
          </CardBodyDuration>
          <CardBodyCost>
            <b>{cost}</b> THB
          </CardBodyCost>
        </CardBodyDescription>
        <Divider />
      </CardBody>
      <CardFooter>
        <AuthContextConsumer>
          {({ user }) =>
            (user != null ? (
              <JoinButton joined={joined} />
            ) : (
              <JoinLinkButton to="/login" />
            ))
          }
        </AuthContextConsumer>
      </CardFooter>
    </Card>
  )
}

export default TripCard
