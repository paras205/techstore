import React from 'react'
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';
import logo from '../images/logo.svg';

export default function Navbar() {
    return (
        <ProductConsumer>
            {
                value => {
                    const { cartItems, handleSidebar, handleCart } = value;
                    return <NavWrapper>
                        <div className="nav-center">
                            <FaBars className="nav-icon" onClick={handleSidebar}></FaBars>
                            <img src={logo} alt="tech store logo" />
                            <div className="nav-cart">
                                <FaCartPlus className="nav-icon" onClick={handleCart}></FaCartPlus>
                                <div className="cart-items">
                                    {cartItems}
                                </div>
                            </div>
                        </div>
                    </NavWrapper>
                }
            }
        </ProductConsumer>
    )
}
const NavWrapper = styled.nav`
    position: sticky;
    top: 0px;
    width: 100%;
    padding:1rem 1.5rem;
    background: var(--mainGrey);
    z-index: 999;
    border-bottom: 3px solid var(--primaryColor);
    .nav-center{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1170px;
        margin: 0 auto;
    }
    .nav-icon{
        font-size: 1.5rem;
        cursor: pointer;
    }
    .nav-cart{
        position: relative;
    }
    .cart-items{
        position: absolute;
        background: var(--primaryColor);
        color: var(--mainWhite);
        font-size: 0.85rem;
        top: -8px;
        right: -25px;
        padding: 0 5px;
        border-radius: 50%;
    }
`;