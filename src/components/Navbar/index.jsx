import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 120;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center:
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary}
  font-weight: 500;
  cursor: pointer
  text-decoration: none
  transition: all 0.2s ease-in-out;
  &.hover {
  color: ${({ theme }) => theme.primary}
  }
`;

const ButtonContainer = styled.div`
  display: flex
  align-items: center;
  justify-content: center;
  width: 80%
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none
  }
`;

const GithubButton = styled.button`
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  :hover {
    background-color: ${({ theme }) => ``};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>Logo</NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink>Home</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
