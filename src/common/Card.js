import styled, { css } from 'react-emotion'
import { boxShadow, paddingSize, radiusSize } from '../shared/style'

const dynamicStyle = props => css`
  margin-top: ${props.mt};
  margin-right: ${props.mr};
  margin-bottom: ${props.mb};
  margin-left: ${props.ml};
  padding-top: ${props.pt};
  padding-right: ${props.pr};
  padding-bottom: ${props.pb};
  padding-left: ${props.pl};
`

export const Card = styled.div`
  position: relative;
  background: #fff;
  box-shadow: ${boxShadow};
  border-radius: ${radiusSize};

  ${dynamicStyle};
`
export const CardHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  padding: ${paddingSize};
  padding-bottom: 0;

  ${dynamicStyle};
`

export const CardBody = styled.div`
  padding: ${paddingSize};

  ${dynamicStyle};
`
export const CardFooter = styled.div`
  padding: ${paddingSize};
  padding-top: 0;

  ${dynamicStyle};
`
