import React from "react";
import styled from "styled-components";

import logo from '../images/logo.png'

const NavComponentWrapper = styled.nav`
  width: 100%;
  background: ${props => props.theme.main_white};
  display: flex;
  justify-content: center;
  position: fixed;
  height: 70px;
  z-index: 50;
  
  @media (max-width: 750px) {
    justify-content: flex-end;
  }
`;

const NavListWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  transition: all 0.9s cubic-bezier(0.165, 0.84, 0.23, 0.995);
  background: ${props => props.theme.main_white};
  @media (max-width: 750px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100%;
    transform: translateY(-100%);
    &.open {
      transform: translateY(0px);
    }
  }
`;

const NavItem = styled.li`
  transition: 0.5s ease;
  list-style: none;
  padding: 20px;
  cursor: pointer;
  font-family: ${props => props.theme.para1_font};
  font-size: 1.1em;
  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
    transform: translateY(40px);
    opacity: 0;
  }
  &.open {
    transform: translateY(0px);
    opacity: 1;
  }
  :nth-of-type(1) {
    transition-delay: 0.3s;
  }
  :nth-of-type(2) {
    transition-delay: 0.32s;
  }
  :nth-of-type(3) {
    transition-delay: 0.38s;
  }
  :nth-of-type(4) {
    transition-delay: 0.44s;
  }
  :nth-of-type(5) {
    transition-delay: 0.48s;
  }
`;

const NavLogo = styled.div`
  position: absolute;
  left: 0;
  cursor: pointer;
  z-index: 1;
  img{
      width: 90px;
  }
`;

// burger menu button
const MenuIconButton = styled.button`
  @media (min-width: 750px) {
    display: none;
  }
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  border: none;
  background: transparent;
  z-index: 1;
  outline: none;
  width: 55px;
  height: 45px;
  padding: 15px;
  cursor: pointer;
`;

// burger menu icon
const BurgerMenuIcon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.9s cubic-bezier(0.165, 0.84, 0.23, 0.995);
  &.open{
    transform: rotate(-180deg);
  }
  span {
    border-radius: 20px;
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background: #000;
    left: 0;
    transition: all 500ms cubic-bezier(0.165, 0.84, 0.23, 0.995);
    :nth-of-type(1) {
      top: 0;
    }
    :nth-of-type(2),
    :nth-of-type(3) {
      top: 50%;
      transform: translateY(-50%);
    }
    :nth-of-type(3){
      opacity: 0;
    }
    :nth-of-type(4) {
      bottom: 0;
      transform: translateY(40%);
    }
    :nth-of-type(1).open {
      top: 50%;
      opacity: 0;
      transform: translateY(-50%);
    }
    :nth-of-type(4).open {
      bottom: 50%;
      transform: translateY(50%);
      opacity: 0;
    }
    :nth-of-type(2).open {
      transform: rotate(45deg);
    }
    :nth-of-type(3).open {
      transform: rotate(-45deg);
      opacity: 1;
    }
  }
`;

const NavigationAlter = () => {
  const handleMobileMenu = () => {
    const navMenu = document.querySelector(NavListWrapper);
    const navIcon = document.querySelector(BurgerMenuIcon)
    const navItems = document.querySelectorAll(NavItem);
    const appWrapper = document.querySelector("#main__app__wrapper");
    const spans = document.querySelectorAll("span");
    navMenu.classList.toggle("open");
    navIcon.classList.toggle('open')
    appWrapper.classList.toggle('open')
    navItems.forEach(item => {
      item.classList.toggle("open");
    });
    spans.forEach(span => {
      span.classList.toggle("open");
    });
  };

  return (
    <NavComponentWrapper>
      {/* left side logo */}
      <NavLogo>
        <img src={logo} alt="tapas bar logo" />
      </NavLogo>
      <NavListWrapper>
        {/* right side nav items */}
        <li className='nav__item__desktop'>
          <button>HOME</button>
        </li>
        <li className='nav__item__desktop'>
          <button>ABOUT</button>
        </li>
        <li className='nav__item__desktop'>
          <button>MENU</button>
        </li>
        <li className='nav__item__desktop'>
          <button>RESERVATION</button>
        </li>
        <li className='nav__item__desktop'>
          <button>CONTACTS</button>
        </li>
      </NavListWrapper>
      {/* hamburger menu */}
      <MenuIconButton onClick={handleMobileMenu}>
        <BurgerMenuIcon>
          <span />
          <span />
          <span />
          <span />
        </BurgerMenuIcon>
      </MenuIconButton>
    </NavComponentWrapper>
  );
};

export default NavigationAlter;