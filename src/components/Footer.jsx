import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';

export default function Footer() {
    return (
        <ProductConsumer>
            {
                value => {
                    return (
                        <FooterWrapper>
                            <div className="container py-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="text-capitalize">
                                            Copyright &copy; tech store {new Date().getFullYear()}. all rights reserved.
                                        </p>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-around">
                                        {value.socialIcons.map(item => <a href={item.url} rel="noopener noreferrer" key={item.id} target="_blank">{item.icon}</a>)}
                                    </div>
                                </div>
                            </div>
                        </FooterWrapper>
                    )
                }
            }
        </ProductConsumer>
    )
}
const FooterWrapper = styled.footer`
    background: #222;
    color: var(--mainWhite);
    p{
        margin: 0px;
    }
    .icon{
        font-size: 1.5rem;
        color: var(--mainWhite);
        transition: var(--mainTransition);
    }
`