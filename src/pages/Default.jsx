import React from 'react'
import Hero from '../components/Hero';
import defaultBcg from '../images/defaultBcg.jpeg';
import { Link } from 'react-router-dom';

export default function Default() {
    return (
        <React.Fragment>
            <Hero img={defaultBcg} title="404" max="true">
                <h2 className="text-uppercase" style={{ margin: "1rem 0" }}>Page not found</h2>
                <Link to="/" className="main-link" style={{ margin: "2rem 0" }}>Back to homepage</Link>
            </Hero>
        </React.Fragment>
    )
}
