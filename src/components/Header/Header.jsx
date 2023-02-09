import { Outlet } from 'react-router-dom';
import { NavList, StyledLink, NavItem } from './Header.styled';

export const Header = () => {
  return (
    <>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/movies"> Movies</StyledLink>
        </NavItem>
      </NavList>
      <Outlet />
    </>
  );
};
