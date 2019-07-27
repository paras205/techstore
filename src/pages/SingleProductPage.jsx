import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductImage from '../images/singleProductBcg.jpeg';
import { ProductConsumer } from '../context/context';

export default function SingleProductPage() {
    return (
        <React.Fragment>
            <Hero img={singleProductImage} title="single product" />
            <ProductConsumer>
                {
                    value => {
                        const { singleProduct, addToCart, loading } = value;
                        if (loading) {
                            console.log('hello from loading');
                            return <h1>Product Loading ...</h1>
                        }
                        const { company, description, id, price, title, image } = singleProduct;
                        return <section className="py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img
                                            style={{ width: "100%" }}
                                            src={`../${image}`} alt="single Product Image" className="img-fluid img-thumbnail" />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="text-title mb-4">model: {title}</h5>
                                        <h5 className="text-capitalize text-muted mb-4">Company: {company}</h5>
                                        <h5 className="text-capitalize text-main mb-4">Price: ${price}</h5>
                                        <p className="text-capitalize text-title mb-4">
                                            Some information about the product
                                        </p>
                                        <p className="mb-4" style={{
                                            color: "#555",
                                            textAlign: "justify",
                                            lineHeight: "30px",
                                            fontSize: "14px"
                                        }}>
                                            {description}
                                        </p>
                                        <button type="button" className="main-link" style={{
                                            margin: "0.75rem"
                                        }}
                                            onclick={() => addToCart(id)}
                                        >add to cart</button>
                                        <Link to="/products" className="main-link" style={{
                                            margin: "0.75rem"
                                        }}>Back to products</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                }
            </ProductConsumer>
        </React.Fragment>
    )
}
