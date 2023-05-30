import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;

  &.active {
    color: red;
  }

  &:focus {
    color: red;
  }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
`;
