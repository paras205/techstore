import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context/context';

export default function SideBar() {
    return (
        <div>
            <ProductConsumer>
                {value => {
                    const { links, handleSidebar, sidemenu } = value;
                    return <SideWrapper show={sidemenu}>
                        <ul>
                            {links.map(link => {
                                return (
                                    <li key={link.id}>
                                        <Link className="sidebar-link" to={link.path}
                                            onClick={handleSidebar}
                                        >{link.text.toUpperCase()}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </SideWrapper>
                }}
            </ProductConsumer>
        </div>
    )
}
const SideWrapper = styled.nav`
    position: fixed;
    top: 60px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    border-right: 4px solid var(--primaryColor);
    transition: var(--mainTransition);
    transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-100%);')};
    ul{
        list-style: none;
        padding: 0 !important;
    }
    .sidebar-link{
        display: block;
        text-transform: capitalize;
        font-size: 18px;
        color: #555;
        font-weight: 600;
        border-bottom: 1px solid #ddd;
        padding:  1.5rem;
        background: transparent;
        transition: var(--mainTransition);
    }
    .sidebar-link:hover{
        text-decoration: none;
        background: var(--primaryColor);
        color:  var(--mainWhite);
    }
    @media(min-width: 576px){
        width: 20rem;
    }
`