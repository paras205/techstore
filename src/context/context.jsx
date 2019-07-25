import React, { Component } from 'react'
import { linkData } from './linkData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        sidemenu: false,
        cartOpen: false,
        cartItems: 0,
        cart: [],
        links: linkData
    }
    handleSidebar = () => {
        this.setState({
            sidemenu: !this.state.sidemenu
        })
    }
    handleCart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }
    closeCart = () => {
        this.setState({
            cartOpen: false
        })
    }
    openCart = () => {
        this.setState({
            cartOpen: true
        })
    }
    render() {
        return (
            < ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart
            }} >
                {this.props.children}
            </ProductContext.Provider >
        )

    }
}
const ProductConsumer = ProductContext.Consumer;

export {
    ProductProvider, ProductConsumer
}