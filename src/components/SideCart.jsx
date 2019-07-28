import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';
import { Link } from 'react-router-dom';


export default function SideCart() {
    return (
        <ProductConsumer>
            {value => {
                const { cartOpen, cart, closeCart, cartTotal } = value;
                return <CartWrapper show={cartOpen} onClick={closeCart}>
                    <ul>
                        {cart.map(item => {
                            return <li key={item.id} className="cart-item mb-4">
                                <img width="35" src={item.image} alt={item.title} />
                                <div className="mt-3">
                                    <h6 className="text-uppercase">{item.title}</h6>
                                    <h6 className="text-title text-capitalize">Amount: {item.count}</h6>
                                </div>
                            </li>
                        })}
                    </ul>
                    <h4 className="text-main text-capitalize">Cart Total ${cartTotal} </h4>
                    <div className="text-center my-5">
                        <Link to="/cart" className="main-link">Cart page</Link>
                    </div>
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
    overflow: scroll;
    padding: 2rem;
    ul{
        list-style: none;
        padding: 0px;
    }
`