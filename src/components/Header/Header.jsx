import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #000000;
  &.active {
    color: #d11f1f;
  }
`;

export const Header = () => {
  return (
    <>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies"> Movies</StyledLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
