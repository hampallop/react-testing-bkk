import styled from 'react-emotion'
import { paddingSize, radiusSize } from '../shared/style'

export const Input = styled.input`
  height: 24px;
  border-radius: 6px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  padding: 6px;
  font-size: 16px;
`

export const ErrorMessage = styled.div`
  background: rgba(255, 0, 0, 0.2);
  padding: ${paddingSize};
  border-radius: ${radiusSize};
  border: 1px solid rgba(255, 0, 0, 0.6);
  line-height: 1;
`

export const Label = styled.label``
