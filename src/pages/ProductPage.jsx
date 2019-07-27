import React from 'react'
import Product from '../components/productpage/Products';
import Hero from '../components/Hero';
import productBcg from '../images/productsBcg.jpeg';

export default function ProductPage() {
    return (
        <React.Fragment>
            <Hero img={productBcg} />
            <Product />
        </React.Fragment>
    )
}
