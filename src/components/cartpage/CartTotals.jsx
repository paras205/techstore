import React from 'react'
import { ProductConsumer } from '../../context/context';
export default function CartTotals() {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    {
                        value => {
                            const { clearCart, cartSubTotal, cartTotal, cartTax } = value;
                            return <div className="col text-title text-center my-5">
                                <button className="btn btn-outline-danger text-capitalize mb-4"
                                    onClick={clearCart}
                                >Clear Cart</button>
                                <h3>SubTotal: {cartSubTotal}</h3>
                                <h3>Tax: {cartTax}</h3>
                                <h3>Total: {cartTotal}</h3>
                            </div>
                        }
                    }
                </ProductConsumer>
            </div>
        </div>
    )
}
