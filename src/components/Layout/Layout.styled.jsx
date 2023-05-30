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
export const Header = styled.header`
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;
