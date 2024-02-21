import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: #090b13;
  height: 70px;
`;
const Logo = styled.img`
  display: flex;
  width: 80px;
`;
