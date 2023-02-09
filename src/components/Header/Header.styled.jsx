import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding-bottom: 20px;
  border-bottom: solid 1px #e9e8ed;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  &.active {
    color: #d11f1f;
  }
`;
export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
