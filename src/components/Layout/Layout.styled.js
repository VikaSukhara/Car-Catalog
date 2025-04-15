import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 50px 218px;
`;
export const Nav = styled.nav`
  margin: 0 auto;
  gap: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledLink = styled(NavLink)`
  color: green;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  position: relative;

  transition: transform 0.3 ease;

  &.active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;
    width: 50%;
    height: 3px;
    background-color: green;

    transform: translateX(-50%);
    margin-top: 20px;
  }

  &:hover {
    transform: scale(1.08);
  }
`;
