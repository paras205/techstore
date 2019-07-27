import React from 'react'
import Product from '../Products';
import { Link } from 'react-router-dom';
import Title from '../Title';
import { ProductConsumer } from '../../context/context';

export default function Featured() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Featured Products" center="true" />
                <div className="row" style={{
                    marginTop: "40px"
                }}>
                    <ProductConsumer>
                        {
                            value => {
                                const { featuredProducts } = value;
                                return featuredProducts.map(product => (
                                    <Product key={product.id} product={product}></Product>
                                ))
                            }
                        }
                    </ProductConsumer>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <Link to="/products" className="main-link">
                            Our Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
