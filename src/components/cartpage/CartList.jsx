import React from 'react'
import CartItem from './CartItems';
import { ProductConsumer } from '../../context/context';
export default function CartList() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ProductConsumer>
                        {
                            value => {
                                const { cart, increament, decreament, removeItem } = value;
                                if (cart.length === 0) {
                                    return (
                                        <h1 className="text-title text-center my-4">Your Cart Is Currently Empty</h1>
                                    )
                                }
                                return (
                                    <React.Fragment>
                                        {cart.map(item => (
                                            <CartItem key={item.id} cartItem={item}
                                                increament={increament}
                                                decreament={decreament}
                                                removeItem={removeItem}
                                            >

                                            </CartItem>
                                        ))}
                                    </React.Fragment>
                                )

                            }
                        }
                    </ProductConsumer>
                </div>
            </div>
        </div>
    )
}
