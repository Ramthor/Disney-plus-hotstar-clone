import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <Link to={"/"}>
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </Link>
        <Link>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </Link>
        <Link>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </Link>
        <Link>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </Link>
        <Link>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </Link>
        <Link>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </Link>
      </NavMenu>
      <UserImg src="/images/ram.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: #090b13;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 10px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    cursor: pointer;
    color: white;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 2px;
        background-color: white;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.22, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
