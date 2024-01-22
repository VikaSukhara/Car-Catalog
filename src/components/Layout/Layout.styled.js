import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  margin: 0 auto;
  gap: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a.active {
    color: rgb(52, 112, 255);
  }
  
  a:hover {
    color: rgb(52, 112, 255);
  }
`;
export const StyledLink = styled(NavLink)`
  color: #121417;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
