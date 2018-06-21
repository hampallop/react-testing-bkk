import styled from 'react-emotion'
import { colors, radiusSize, boxShadow } from '../shared/style'

const Button = styled.button`
  background: ${colors.primaryBlue};
  min-height: 36px;
  min-width: 100px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  color: #fff;
  border-radius: ${radiusSize};
  box-shadow: ${boxShadow};
  border: 1px solid ${colors.primaryBlue};

  ${props =>
    props.stretch &&
    `
    width: 100%;
  `};

  ${props =>
    props.inverse &&
    `
      background: #fff;
      color: ${colors.primaryBlue};
  `};
`

export default Button
