import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';

export default function SideCart() {
    return (
        <ProductConsumer>
            {value => {
                const { cartOpen, cart, cartItems, closeCart } = value;
                return <CartWrapper show={cartOpen} onClick={closeCart}>
                    <p>Cart Items</p>
                </CartWrapper>
            }}
        </ProductConsumer>
    )
}
const CartWrapper = styled.div`
    position: fixed;
    top: 60px;
    right: 0px;
    width: 100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    border-left: 4px solid var(--primaryColor);
    padding:  1.5rem;
    transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%);')};
    transition: var(--mainTransition);
    @media(min-width: 576px){
        width: 20rem;
    }
`