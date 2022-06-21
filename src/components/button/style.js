import styled from 'styled-components';
import { color } from 'styled-system';

const Button = styled.div`
  width: 160px;
  padding: 16px;
  font-size: 24px;
  text-align: center;
  border-radius: 24px;
  cursor: pointer;
  user-select: none;
  
  ${color};
  
  &:hover {
    box-shadow: 0 0 12px 3px rgba(0,0,0,0.5);
  }
`;

export default Button;
