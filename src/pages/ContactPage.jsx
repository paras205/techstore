import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/contactpage/contact';
import contactImg from '../images/contactBcg.jpeg';
export default function ContactPage() {
    return (
        <React.Fragment>
            <Hero img={contactImg}>

            </Hero>
            <Contact />
        </React.Fragment>
    )
}
