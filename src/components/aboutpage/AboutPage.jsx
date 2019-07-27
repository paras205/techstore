import React from 'react'
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function AboutPage() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about company" />
                    </div>
                    <div className="col-md-6 mx-auto my-3">
                        <Title title="about us"></Title>
                        <p className="text-lead text-muted my-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique facilis alias impedit quis magni officia odit placeat quibusdam! Cum reiciendis sapiente ad optio ea quasi est modi totam autem.</p>
                        <p className="text-lead text-muted my-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique facilis alias impedit quis magni officia odit placeat quibusdam! Cum reiciendis sapiente ad optio ea quasi est modi totam autem.</p>
                        <p className="text-lead text-muted my-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique facilis alias impedit quis magni officia odit placeat quibusdam! Cum reiciendis sapiente ad optio ea quasi est modi totam autem.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
