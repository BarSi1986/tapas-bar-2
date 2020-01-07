import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo.png'
import menuOpen from '../images/menu-icon-open.png'
import menuClose from '../images/menu-icon-close.png'


const NavWrapper = styled.section`
overflow: hidden;
width: 100%;
height: 90px;
position: fixed;
top: 0;
left: 0;
z-index: 5;
background: ${props => props.theme.main_white};
box-shadow: 0px 1px 3px -2px #000;
display: flex;
justify-content: space-around;
align-items: center;

@media (max-width: 749px) {
    justify-content: flex-start;
    overflow: visible;
    }
.logo{

    height: 100px;
    padding-bottom: 10px;
    z-index: 20;
}
.nav__wrapper__desktop{
    @media (max-width: 749px) {
        display: none;
    }
    display: flex;
    margin-top: 28px;
    .nav__item__desktop{
        list-style: none;
        button{
            padding: 20px 5px;
            background:none;
            margin: 0 40px;
            cursor: pointer;
            border: none;
            font-family: ${props => props.theme.header2_font};
            font-size: 1em;
            font-weight: 600;
            position: relative;
            outline: none;
            &::after{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 30px;
                background: rgb(255, 244, 128);
                z-index: -1;
                transition: ${props => props.theme.main_transition};
                transform: translateY(100%);
                opacity: 0;
            }
            &:hover{
                &::after{
                    transform: translateY(0%);
                    opacity: 1;
                }
            }
            @media (max-width: 1000px) {
                margin: 15px;
            }
        }
    }
}

.menuOpen{
    @media (min-width: 749px) {
     display: none;   
    }
        position: absolute;
        top: 20px;
        right: 25px;
        list-style: none;
            button{
             cursor: pointer;
             outline: none;
             background: transparent;
             border: none;
             padding: 20px;
        }
    }

.nav__wrapper__mobile{
    @media (min-width: 750px) {
        display: none;
    }
    position: fixed;
    background: ${props => props.theme.main_white};
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    transition: ${props => props.theme.main_transition};
    transition-delay: .1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 15;
    transform: translateY(-100%);

    &.clicked{
        transform: translateY(0);
        .nav__item__mobile{
            transform: translateY(0px);
            opacity: 1;
        }
        .menuClose{
            button{
                transform: rotate(0deg);
            }
        }
    }

    .nav__item__mobile{
        list-style: none;
        transform: translateY(-50px);
        opacity: 0;
        transition: .4s ease;
        transition-delay: .3s;
        button{
            outline: none;
            cursor: pointer;
            font-family: ${props => props.theme.header2_font};
            padding: 16px;
            border: none;
            background: transparent;
            font-size: 1.3em;
            font-weight: 600;
        }
    }
    .menuClose{
        position: absolute;
        top: 2px;
        right: 10px;
        list-style: none;
        button{
            cursor: pointer;
            outline: none;
            background: transparent;
            border: none;
            transform: rotate(180deg);
            transition: .4s ease;
            transition-delay: .2s;
            padding: 20px;
        }
    }

}
`

const Navigation = () => {

    const menuClicked = () => {
        const menu = document.querySelector('.nav__wrapper__mobile')
        menu.classList.toggle('clicked')
        const wholeApp = document.querySelector('.main__app__wrapper')
        wholeApp.classList.toggle('moved')
    }
    return (
        <NavWrapper>
            <img className="logo" src={logo} alt="company logo" />

            <ul className='nav__wrapper__desktop'>
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
            </ul>

            <li className=" menu menuOpen">
                <button onClick={menuClicked}>
                    <img width="32px" src={menuOpen} alt="close menu button" />
                </button>
            </li>

            <ul className='nav__wrapper__mobile'>
                <li className='nav__item__mobile'>
                    <button onClick={() => {
                        menuClicked()
                    }}>HOME</button>
                </li>
                <li className='nav__item__mobile'>
                    <button onClick={() => {
                        menuClicked()
                    }}>ABOUT</button>
                </li>
                <li className='nav__item__mobile'>
                    <button onClick={() => {
                        menuClicked()
                    }}>MENU</button>
                </li>
                <li className='nav__item__mobile'>
                    <button onClick={() => {
                        menuClicked()
                    }}>RESERVATION</button>
                </li>
                <li className='nav__item__mobile'>
                    <button onClick={() => {
                        menuClicked()
                    }}>CONTACTS</button>
                </li>

                <li className="menu menuClose">
                    <button onClick={menuClicked}>
                        <img width="60px" src={menuClose} alt="close menu button" />
                    </button>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Navigation
