import React from 'react'
import About from '../components/aboutpage/AboutPage';
import Hero from '../components/Hero';
import abouttBcg from '../images/aboutBcg.jpeg';

export default function AboutPage() {
    return (
        <React.Fragment>
            <Hero img={abouttBcg}>
            </Hero>
            <About />
        </React.Fragment>
    )
}
